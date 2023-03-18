import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import AuthDetails from "./component/AuthDetails";

function App() {
  return (
    <div>
      <SignUp />
      <p>Already a member?</p>
      <SignIn />

      <AuthDetails />
    </div>
  );
}

export default App;
