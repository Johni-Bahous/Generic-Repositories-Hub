import { Button } from "react-bootstrap";
import { UserProps } from "../types/user";
import "../sass/profile.scss";
import FollowIcon from "../assets/people.svg";
import FavIcon from "../assets/star.svg";

type User = {
  user: UserProps;
};
/** A functional component that renders out the user profile with requested data fetched from the API */
const Profile = ({ user }: User) => {
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
          ""
        )}
        <Button className="profile-innerField-button">Follow</Button>
        <span className="profile-innerField-follow">
          <img className="profile-innerField-icon" src={FollowIcon} />
          {user.followers} Followers • {user.following} Following •
          <img className="profile-innerField-icon" src={FavIcon} />
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
