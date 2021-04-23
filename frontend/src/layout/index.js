import { Header } from "../components";
import "./../styles/mainLayout.scss";

export const MainLayout = ({ children, handleSearchSubmit }) => {
  return (
    <div className="main-layout">
      <Header handleSearchSubmit={handleSearchSubmit} />
      <div style={{ height: "100%" }}>{children}</div>
    </div>
  );
};
