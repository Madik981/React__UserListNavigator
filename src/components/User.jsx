import { Link } from "react-router-dom";
import "./user.css";

const User = ({ user }) => {
  return (
    <li className="user">
      <img className="user__avatar" src={user.avatar} alt={user.first_name} />
      <div className="user__info">
        <h2 className="user__name">
          {user.first_name}
        </h2>
      </div>
      <Link className="user__link" to={`/userDetails/${user.id}`} state={{ user }}>Details</Link>
    </li>
  );
};

export default User;
