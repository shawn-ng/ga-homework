import React from "react";
import "./ProfileHeader.css";

const ProfileHeader = ({ username, displayName }) => {
  return (
    <div className="profile-header">
      <h3>
        <span className="username">@{username}</span>
        <span className="displayName">{displayName}</span>
      </h3>
      <p>This user has an interesting bio which goes here.</p>
    </div>
  );
};

export default ProfileHeader;
