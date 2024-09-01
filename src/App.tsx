import "./App.css";
import { getCookie } from "react-use-cookie";

import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";

function App() {
  const token = getCookie("token");

  return <div className="App">{token ? <UserProfile /> : <Login />}</div>;
}

export default App;
