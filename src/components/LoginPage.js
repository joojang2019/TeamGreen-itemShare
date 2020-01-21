import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Input, Button, Select, MenuItem, Switch } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const LoginPage = ({ setCurrentUser }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    domain: "u.northwestern.edu",
    password: ""
  });
  const [formType, setFormType] = useState("Login");
  const history = useHistory();

  const setUserField = (field, data) => {
    setLoginInfo({ ...loginInfo, [field]: data });
  };

  const login = e => {
    e.preventDefault();
    const { email, domain, password } = loginInfo;
    firebase
      .auth()
      .signInWithEmailAndPassword(`${email}@${domain}`, password)
      .then(() => history.push("/"))
      .catch(error => alert(error.message));
    setCurrentUser(loginInfo);
  };

  const signUp = e => {
    e.preventDefault();
    const { email, domain, password } = loginInfo;
    firebase
      .auth()
      .createUserWithEmailAndPassword(`${email}@${domain}`, password)
      .catch(error => alert(error.message));
    alert("You successfully signed up!");
    setFormType("Login");
  };

  const handleFormChange = e => {
    if (e.target.checked) {
      setFormType("Signup");
    } else {
      setFormType("Login");
    }
  };

  return (
    <form
      onSubmit={formType === "Login" ? login : signUp}
      style={{ textAlign: "center" }}
    >
      <div>
        <Input
          placeholder="Email"
          value={loginInfo.email}
          onChange={e => setUserField("email", e.target.value)}
        />
        @
        <Select
          autoWidth={true}
          labelId="domain-select"
          value={loginInfo.domain}
          onChange={e => setUserField("domain", e.target.value)}
        >
          <MenuItem value="u.northwestern.edu">u.northwestern.edu</MenuItem>
          <MenuItem value="northwestern.edu">northwestern.edu</MenuItem>
        </Select>
      </div>
      <div>
        <Input
          placeholder="Password"
          value={loginInfo.password}
          type="password"
          onChange={e => setUserField("password", e.target.value)}
        />
      </div>
      <Button type="submit">{formType}</Button>
      <div>
        Login
        <Switch onChange={handleFormChange} />
        Signup
      </div>
    </form>
  );
};

export default LoginPage;
