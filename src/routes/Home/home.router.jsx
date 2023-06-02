import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selecter";
const Home = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div>
      <h1>{currentUser.username}</h1>
      <h3>{currentUser.useremail}</h3>
      <span>{currentUser.accessToken ? "yes" : "no"}</span>
    </div>
  );
};
export default Home;
