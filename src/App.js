import { useRef } from "react";
import "./App.css";
import ExtendedCommentsComponent from "./pages/CommentCounter";
import ExtendedLikesComponent from "./pages/LikesCounter";
import User from "./pages/User";

function App() {
  let inputRef = useRef(null);
  const updateUserName = () => {
    inputRef.current.value = "Nikhil";
  };

  return (
    <div className="App">
      <ExtendedLikesComponent />
      <ExtendedCommentsComponent />
      <br />
      <User ref={inputRef} />
      <br />
      <button className="btn btn-primary" onClick={updateUserName}>
        Update Username
      </button>
    </div>
  );
}

export default App;
