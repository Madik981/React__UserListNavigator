import { useLocation, useParams } from "react-router-dom";
import "./userDetails.css";


const UserDetails = () => {
    const { id } = useParams();
    const user = useLocation().state.user;

    return (
        <div className="userDetails">
            <h1>User Details</h1>
            <img className="userDetails__avatar" src={user.avatar} alt={user.first_name} />
            <h2>{user.first_name} {user.last_name}</h2>
            <div className="additional-text">
                <p>User ID: {id}</p>
                <p className="user__email">Email: {user.email}</p>
            </div>
        </div>
    );
};

export default UserDetails;