import { Button } from "react-bootstrap";
import { UserProps } from "../types/user";
import "../sass/profile.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

type User = {
  user: UserProps;
};
/** A functional component that renders out the user profile with requested data fetched from the API */
const Profile = ({ user }: User) => {
  const link = "https://www.github.com/" + user.login;
  return (
    <div className="profile">
      <div className="profile-pictureField">
        <img
          className="profile-picture"
          alt={user.name}
          src={user.avatar_url}
        />
      </div>
      <div className="profile-innerField">
        <span className="profile-innerField-text">{user.name}</span>
        <span className="profile-innerField-subtext">{user.login}</span>
        {user.bio ? (
          <span className="profile-innerField-para">{user.bio}</span>
        ) : (
          null
        )}
        <Button className="profile-innerField-button" href={link} target="_blank">Github Link</Button>
        <span className="profile-innerField-follow">
          <i className="profile-innerField-icon bi-person-fill-down text-dark"/>
          {user.followers} Followers • 
          <i className="profile-innerField-icon bi-person-fill-up text-dark"/>
          {user.following} Following •
          <i className="profile-innerField-icon bi-star-fill text-dark" />
          24
        </span>
        {user.email ? (
          <span className="profile-innerField-email">{user.email}</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Profile;
