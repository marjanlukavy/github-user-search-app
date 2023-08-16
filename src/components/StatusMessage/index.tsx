import TopBarProgress from "react-topbar-progress-indicator";

import useUser from "../../store/store";
import { StatusMessageProps } from "../../types";
import ErrorDisplay from "./ErrorDisplay";
import "../../utils/config";

function StatusMessage({ errorText }: StatusMessageProps) {
  const { loading, error } = useUser();

  if (loading) {
    return <TopBarProgress />;
  }

  if (error) {
    return <ErrorDisplay errorText={errorText} />;
  }

  return null;
}

export default StatusMessage;
