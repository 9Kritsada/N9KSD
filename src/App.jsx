import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMoon,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "./components/footer";
import Content from "./components/content";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen px-10 bg-gray-200 dark:text-white dark:bg-gray-900 animation-fade md:px-20 lg:px-40">
        <section id="main">
          <header className="flex justify-between py-10 items-center ">
            <logo className="text-xl font-orbit">N9KSD</logo>
            <FontAwesomeIcon
              icon={faCloudMoon}
              onClick={() => setDarkMode(!darkMode)}
            />
          </header>
          <div className="p-5 md:p-10 text-center">
            <h1 className="text-center py-2 text-5xl md:text-6xl text-orange-600 dark:text-amber-400 font-orbit">
              Kritsa Wiriya
            </h1>
            <h2 className="py-2 text-2xl md:text-3xl">Front-End Developer</h2>
            <p className="max-w-xl mx-auto py-5 md:text-xl leading-8 text-gray-700 dark:text-gray-400">
              Hello. friends, welcome to my website. I am kritsada wiriya. I am
              form thailand and I am studying in computer engineer at
              rajamangala university of technology lanna.
            </p>
            <div className="py-5 flex justify-between max-w-lg mx-auto">
              <img src="/N9KSD-YRGB.png" className="brightness-90" />
            </div>
          </div>

          <div className="absolute bottom-16 w-full z-40">
            <div className="flex items-center justify-center">
              <a href="#1" className="opacity-80 text-3xl animate-bounce outline-dashed outline-2 outline-offset-2 outline-black/75 dark:outline-white/75 rounded-md">
                <FontAwesomeIcon  icon={faComputerMouse} />
              </a>
            </div>
          </div>
        </section>

        <Content />

        <Footer />
      </div>
    </div>
  );
}

export default App;
