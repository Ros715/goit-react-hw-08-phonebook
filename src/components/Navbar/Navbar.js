import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLoggedIn } from "../../redux/contacts-selectors";
import { logout } from "../../redux/operations";

function Navbar() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(getLoggedIn);

  return (
    <div>
      {!loggedIn && (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
      {loggedIn && (
        <div>
          <button onClick={dispatch(logout)}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
