import { Button } from "react-bootstrap";
import { UserProps } from "../types/user";
import "../sass/profile.scss";
import FollowIcon from "../assets/people.svg";
import FavIcon from "../assets/star.svg";

 const Profile = ({

  login,
  avatar_url,
  name,
  email,
  bio,
  followers,
  following,

}: UserProps) => {
  
  return (
    <div className="profile">
      <div className="profile-pictureField">
        <img
        className="profile-picture"
        alt={name}
        src={avatar_url}
        />
      </div>
      <div className="profile-innerField">
        <span className="profile-innerField-text">{name}</span>
        <span className="profile-innerField-subtext">{login}</span>
        <span className="profile-innerField-para">{bio}</span>
        <Button className="profile-innerField-button">Follow</Button>
        <span className="profile-innerField-follow">
          <img className="profile-innerField-icon" src={FollowIcon}/>
          {followers} Followers • {following} Following • 
          <img className="profile-innerField-icon" src={FavIcon}/>
          24
        </span>
        {email ? (<span className="profile-innerField-email">{email}</span> ) : "" }
      
      </div>
    </div>
  );
};

export default Profile