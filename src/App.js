import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";

function App() {
  return (
    <div className="App">
      <SignUp />
      <p>Already a member?</p>
      <SignIn />
    </div>
  );
}

export default App;
