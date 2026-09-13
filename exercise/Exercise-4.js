import { useState } from "react";
export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const isInvalid = username.trim().length < 3;

  function handleSubmit(e) {
    e.preventDefault();
    if (isInvalid) {
      return;
    }
    alert(`Submitted: ${username}`);
    setUsername("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </label>
      {isInvalid && <p>Username must be at least 3 characters</p>}
      <button type="submit" disabled={isInvalid}>
        Submit
      </button>
    </form>
  );
}
