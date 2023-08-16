import useUser from "../store/store";
import { fetchGitHubUser } from "../utils/githubAPI";

function useUserSearch() {
  const { username, setLoading, setError, setUserData, setUsername, loading } =
    useUser();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      const data = await fetchGitHubUser(username);
      setUserData(data);
    } catch (err) {
      setError("User not found");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    username,
    setUsername,
    handleSearch,
  };
}

export default useUserSearch;
