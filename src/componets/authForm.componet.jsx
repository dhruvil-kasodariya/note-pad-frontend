import "./authForm.stlye.css";

const AuthForm = ({
  handleSignUpChange,
  handleSignInChange,
  handleSignInSubmit,
  handleSignUpSubmit,
}) => {
  return (
    <div className="mainbody">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
          <form onSubmit={handleSignInSubmit}>
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="useremail"
              placeholder="Email"
              required=""
              onChange={handleSignInChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required=""
              onChange={handleSignInChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="signup">
          <form onSubmit={handleSignUpSubmit}>
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="username"
              placeholder="User name"
              required=""
              onChange={handleSignUpChange}
            />
            <input
              type="email"
              name="useremail"
              placeholder="Email"
              required=""
              onChange={handleSignUpChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required=""
              onChange={handleSignUpChange}
            />
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AuthForm;
