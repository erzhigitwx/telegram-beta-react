import "../src/styles/App.scss";
import Navbar from "./components/navbar/navbar.jsx";
import AppRouter from "./AppRouter.jsx";
import "./styles/login.scss";
import "./styles/chat.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
