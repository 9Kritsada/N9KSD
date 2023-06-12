import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

import Footer from "./components/footer";
import Content from "./components/content";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen px-10 bg-zinc-300 dark:text-white dark:bg-gray-900 animation-fade md:px-20">
      
        <header className="flex justify-between py-10 items-center">
          <logo className="text-xl font-orbit">N9KSD</logo>
          <FontAwesomeIcon icon={faCloudMoon} onClick={() => setDarkMode(!darkMode)} />
        </header>

        <Content />

        <Footer />
      </div>
    </div>
  );
}

export default App;
