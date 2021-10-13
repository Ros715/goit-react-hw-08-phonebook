import { useDispatch, useSelector } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import authSelectors from "../redux/auth/auth-selectors";
//import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

/*
      <img src={avatar} alt="" width="32" style={styles.avatar} />
*/

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  //  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <span style={styles.name}>Hello, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}
