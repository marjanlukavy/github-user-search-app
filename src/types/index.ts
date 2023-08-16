export interface StatusMessageProps {
  errorText: string;
}

export type Store = {
  username: string;
  userData: any | null;
  loading: boolean;
  error: string | null;
  setUsername: (newUsername: string) => void;
  setUserData: (data: any | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (errorMsg: string | null) => void;
};

export interface ErrorDisplayProps {
  errorText: string;
}
