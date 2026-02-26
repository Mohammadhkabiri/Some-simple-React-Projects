import { useState } from "react";

export default function Login() {
  const [entredValue, setEntredValue] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log(entredValue);
  }

  function handleChangeValue(identifier, value) {
    setEntredValue((prevEntredValue) => {
      return {
        ...prevEntredValue,
        [identifier]: value,
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            onChange={(event) => handleChangeValue("email", event.target.value)}
            value={entredValue.email}
            id="email"
            type="email"
            name="email"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            onChange={(event) =>
              handleChangeValue("password", event.target.value)
            }
            value={entredValue.password}
            id="password"
            type="password"
            name="password"
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
