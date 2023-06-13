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
          <div className="p-10 text-center">
            <h1 className="text-center py-2 text-5xl md:text-6xl text-orange-600 dark:text-amber-400 font-orbit">
              Kritsa Wiriya
            </h1>
            <h2 className="py-2 text-2xl md:text-3xl">Fdas dasd dasdas das</h2>
            <p className="max-w-xl mx-auto py-5 md:text-xl leading-8 text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              laborum nobis illo dolore et molestiae accusamus facere velit sunt
              maiores, ratione non quis impedit doloribus qui. Sapiente
              exercitationem eaque doloremque.
            </p>
          </div>

          <div className="flex justify-between max-w-lg mx-auto">
            <div className="w-20 h-32 bg-red-600"></div>
            <div className="w-20 h-20 bg-green-600"></div>
            <div className="w-20 h-40 bg-blue-600"></div>
          </div>

          <div className="absolute bottom-[5%] w-full z-40">
            <div className="flex items-center justify-center">
              <a href="#section1" className="text-3xl animate-bounce">
                <FontAwesomeIcon icon={faComputerMouse} />
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
