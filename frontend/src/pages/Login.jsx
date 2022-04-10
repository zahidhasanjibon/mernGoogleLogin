import facebook from "../img/facebook.png";
import github from "../img/github.png";
import google from "../img/google.png";

const Login = () => {

const googleFunc = () => {
  window.open("http://localhost:5000/auth/google","_self")
}

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={googleFunc}>
            <img src={google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github">
            <img src={github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
