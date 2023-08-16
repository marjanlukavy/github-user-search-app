import useUser from "../../store/store";
import "./UserDataDisplay.css";

function UserDataDisplay() {
  const { userData, username } = useUser();

  if (!userData) {
    return null;
  }

  return (
    <article className="user-data-container">
      <section className="user-image-container">
        <img
          src={userData.avatar_url}
          alt={`${username}'s avatar`}
          className="user-image"
        />
      </section>
      <section className="user-details">
        <p className="username">{userData.login}</p>
        <p className="user-stats">
          Following: {userData.following} | Followers: {userData.followers}
        </p>
      </section>
      <section>
        <a
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link button"
        >
          Visit GitHub Profile
        </a>
      </section>
    </article>
  );
}

export default UserDataDisplay;
