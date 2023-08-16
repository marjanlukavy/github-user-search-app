import useUserSearch from "../../hooks/useUserSearch";
import "./UserSearchForm.css";

function UserSearchForm() {
  const { loading, setUsername, handleSearch, username } = useUserSearch();

  return (
    <article>
      <form className="form-container" onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="input-field"
        />
        <button type="submit" className="button" disabled={loading}>
          Search
        </button>
      </form>
    </article>
  );
}

export default UserSearchForm;
