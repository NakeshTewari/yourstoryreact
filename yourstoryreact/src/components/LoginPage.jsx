import React from "react";
import ReactDOM from "react-dom";

export default function LoginPage() {
  return (
    <form action="" className="LoginPage">
      <h1>Login Page</h1>
      <label htmlFor="">Enter Name </label>
      <input type="text" />
      <br />
      <label htmlFor="">Enter password </label>
      <input type="text" />
      <br />
      <button>Submit</button>
    </form>
  );
}
