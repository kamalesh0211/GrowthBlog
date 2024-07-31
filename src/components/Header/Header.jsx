import GrowthLogo from "../../assets/GrowthLogo.svg";
import "./Header.css";
import LoginPage from "../LoginPage/LoginPage";
const Header = () => {
  return (
    <section className="header">
      <a href="" className="image">
        <img src={GrowthLogo} alt="GrowthLogo" />
      </a>
      <div className="login-register">
        <a href={<LoginPage />} className="login">
          Login
        </a>
        <a href="" className="register">
          Register
        </a>
      </div>
    </section>
  );
};

export default Header;
