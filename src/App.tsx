import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Overview from "./Pages/Overview/Overview";
import Register from "./Pages/Auth/Register";
import Tickets from "./Pages/Tickets/Tickets";
import Ideas from "./Pages/Ideas";
import Contacts from "./Pages/Contacts";
import Agents from "./Pages/Agents";
import Articles from "./Pages/Articles";
import Settings from "./Pages/Settings";
import Subscription from "./Pages/Subscription";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
