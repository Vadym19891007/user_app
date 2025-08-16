import { useDispatch } from "react-redux";
import { addUser } from "./userListSlice";
import { useState } from "react";

function AddUserForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (name.trim().length > 0 && email.trim().length > 0) {
      dispatch(addUser({ name, email, id: Date.now() }));
      setName("");
      setEmail("");
    }
  }
  return (
    <form className="add-user-form">
      <input
        required
        value={name}
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        value={email}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={(e) => onSubmit(e)}>
        Add User
      </button>
    </form>
  );
}

export default AddUserForm;
