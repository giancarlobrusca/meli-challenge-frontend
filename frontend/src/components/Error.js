import { Link } from "react-router-dom";
import "../styles/error.scss";

export const Error = ({ message }) => {
  return (
    <div className="error">
      <img
        src="https://img.icons8.com/pastel-glyph/2x/error.png"
        alt="Error Cat"
      />
      <h1>{message}</h1>
      <Link to="/">Volver a la Home</Link>
    </div>
  );
};
