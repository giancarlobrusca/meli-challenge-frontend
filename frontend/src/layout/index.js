import { Header } from "../components";
import "./../styles/mainLayout.scss";

export const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      {children}
    </div>
  );
};
