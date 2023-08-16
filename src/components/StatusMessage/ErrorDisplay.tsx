import { ErrorDisplayProps } from "../../types";
import "./ErrorDisplay.css";

function ErrorDisplay({ errorText }: ErrorDisplayProps) {
  return (
    <div className="error-container">
      <p className="error-text">{errorText}</p>
    </div>
  );
}

export default ErrorDisplay;
