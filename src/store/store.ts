import { create } from "zustand";
import { Store } from "../types";

const useUser = create<Store>()((set) => ({
  username: "",
  userData: null,
  loading: false,
  error: null,

  setUsername: (newUsername) => set(() => ({ username: newUsername })),
  setUserData: (data) => set(() => ({ userData: data })),
  setLoading: (isLoading) => set(() => ({ loading: isLoading })),
  setError: (errorMsg) => set(() => ({ error: errorMsg })),
}));

export default useUser;
