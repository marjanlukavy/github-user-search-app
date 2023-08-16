import UserSearchForm from "./components/UserSearchForm";
import UserDataDisplay from "./components/UserDataDisplay";
import StatusMessage from "./components/StatusMessage";

function App() {
  return (
    <main>
      <UserSearchForm />
      <StatusMessage errorText="User not found" />
      <UserDataDisplay />
    </main>
  );
}

export default App;
