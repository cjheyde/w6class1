import StyledButton from "./components/Button";
import React from "react";

function Form() {
  return (
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <StyledButton type="submit">Submit</StyledButton>
      </div>
    </form>
  );
}

export default Form;
