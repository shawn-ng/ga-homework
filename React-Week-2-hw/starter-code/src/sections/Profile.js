import React from "react";
import ProfileHeader from "../components/ProfileHeader";

const users = {
  robin: {
    username: "robin",
    displayName: "Robin James Kerrison",
  },
  tristan: {
    username: "tristan",
    displayName: "Tristan Hall",
  },
};

const Profile = ({ username }) => {
  if (!username) {
    return (
      <section className="profile">
        <h2>Profile</h2>
        <p>No user selected</p>
      </section>
    );
  }
  console.log(username);
  const user = users[username];

  return (
    <section className="profile">
      <h2>Profile</h2>
      <ProfileHeader {...user}></ProfileHeader>
    </section>
  );
};

export default Profile;
