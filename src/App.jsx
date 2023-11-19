import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import { faBtc } from "@fortawesome/free-brands-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/footer";
import Content from "./components/content";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [isloding, setIsloding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloding(false);
    }, 2000);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 0,
      easing: "ease-out-back",
      anchorPlacement: "bottom-center",
    });
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      {isloding ? (
        <>
          <div className="bg-gray-900 fixed top-0 left-0 w-screen h-screen">
            <h1 className="text-white flex items-center justify-center h-full text-6xl font-bold animate-pulse loadfont">Loading...</h1>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen bg-gray-200 dark:text-white dark:bg-gray-900">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-gradient-to-b from-gray-200 dark:from-gray-900">
              <div className="flex flex-wrap justify-between py-10 items-center containers">
                <logo className="text-xl font-orbit">N9KSD</logo>
                <div className="flex items-center space-x-5 w-auto md:order-2">
                  <FontAwesomeIcon
                    icon={faCloudMoon}
                    onClick={() => setDarkMode(!darkMode)}
                  />
                  <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setIsHidden(!isHidden)}
                    className="md:hidden"
                  />
                </div>
                <div
                  className={`w-full md:w-fit md:block ${
                    isHidden ? "hidden" : ""
                  }`}
                  onClick={() => setIsHidden(true)}
                >
                  <ul className="flex md:space-x-5 flex-col md:flex-row md:w-auto md:order-1 mt-10 space-y-2 md:mt-0 md:space-y-0">
                    <li>
                      <a href="#home">
                        <span className="hash">#</span>Home
                      </a>
                    </li>
                    <li>
                      <a href="#experience">
                        <span className="hash">#</span>Experience
                      </a>
                    </li>
                    <li>
                      <a href="#contect">
                        <span className="hash">#</span>Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>

            {/* Content */}
            <Content />

            {/* <Footer /> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
