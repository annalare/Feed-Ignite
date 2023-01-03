import { Post } from "./Post";
import "./styles.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Post />
    </div>
  );
}

export default App;
