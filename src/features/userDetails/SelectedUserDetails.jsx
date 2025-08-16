import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUser } from "./userDetailsSlice";

function SelectedUserDetails() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userList.users);
  const userId = useSelector((state) => state.userDetails.selectedUserId);
  const selectedUser = userId && users.find((user) => user.id === userId);

  return (
    <div className="selected-user-details">
      <h2>Selected User</h2>
      <p>
        <strong>Name: </strong>
        {selectedUser ? selectedUser.name : "No user name selected"}
      </p>
      <p>
        <strong>Email: </strong>
        {selectedUser ? selectedUser.email : "No user email selected"}
      </p>

      <button className="clear-btn" onClick={() => dispatch(selectUser(null))}>
        Clear Selection
      </button>
    </div>
  );
}

export default SelectedUserDetails;
