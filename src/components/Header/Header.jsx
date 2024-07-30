import GrowthLogo from "../../assets/GrowthLogo.svg";
import "./Header.css";
// import LoginPage from "../LoginPage/LoginPage";
const Header = () => {
  return (
    <header>
      <a href="" className="image">
        <img src={GrowthLogo} alt="GrowthLogo" />
      </a>
    </header>
  );
};

export default Header;
