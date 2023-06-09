import "./authForm.stlye.css";
import styled from "styled-components";

export const Button = styled.button`
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #573b8a;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background: #6d44b8;
  }
`;

export const Input = styled.input`
  width: 60%;
  height: 20px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const AuthFormLabel = styled.label``;

const AuthForm = ({
  handleSignUpChange,
  handleSignInChange,
  handleSignInSubmit,
  handleSignUpSubmit,
}) => {
  return (
    <div className="mainbody">
      <div className="main">
        <Input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
          <form onSubmit={handleSignInSubmit}>
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <Input
              type="email"
              name="useremail"
              placeholder="Email"
              required=""
              onChange={handleSignInChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required=""
              onChange={handleSignInChange}
            />
            <Button type="submit">Login</Button>
          </form>
        </div>
        <div className="signup">
          <form onSubmit={handleSignUpSubmit}>
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <Input
              type="text"
              name="username"
              placeholder="User name"
              required=""
              onChange={handleSignUpChange}
            />
            <Input
              type="email"
              name="useremail"
              placeholder="Email"
              required=""
              onChange={handleSignUpChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required=""
              onChange={handleSignUpChange}
            />
            <Button type="submit">Sign up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AuthForm;
