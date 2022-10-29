import "./App.css";
import Gif from "./giphy.gif";

const App = () => {
  return(<div class="message">
      <h2> You are Ready to Code! </h2> <img src={Gif} />
      <a
        target="_blank"
        href="https://github.com/DivyanshSareen/web-starter-pack"
      >
        click to learn more
      </a>
    </div>);
    };
    
export default App;
