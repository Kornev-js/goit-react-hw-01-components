import React from "react";
import { ProfileWrapper, StatsList, UserDescr } from "./Profile.styled";
import PropTypes from 'prop-types'



export const Profile = ({username, avatar, tag, location, followers, views, likes}) => {
    return (
        <ProfileWrapper>
            
  <UserDescr>
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </UserDescr>

  <StatsList>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </StatsList>
</ProfileWrapper>
    )

}

Profile.propTypes  = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    followers: PropTypes.number.isRequired, 
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired,

}