import './App.css';
import CommentCounter from './pages/CommentCounter';
import ExtendedLikesComponent from './pages/LikesCounter';

function App() {
  return (
    <div className="App">
      <ExtendedLikesComponent />
      <CommentCounter />
    </div>
  );
}

export default App;
