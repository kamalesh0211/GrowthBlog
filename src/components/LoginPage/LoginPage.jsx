import { HiMiniUserCircle } from "react-icons/hi2";
import { RiDoorLockBoxFill } from "react-icons/ri";

const LoginPage = () => {
  return (
    <section className="login-page">
        <form action="">
        <div className="UserName"><input type="text" placeholder="UserName" required /><HiMiniUserCircle /></div>
        <div className="password-user"><input type="password" required/><RiDoorLockBoxFill /></div>
        </form>
    </section>
  )
}

export default LoginPage