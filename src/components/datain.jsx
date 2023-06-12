import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";

export default function data() {
  return (
    <>
      <section id="Home">
        <div className="flex h-screen items-center justify-center">
          <div className="flex justify-evenly w-3/5">
            <div className="w-20 h-96 bg-red-600 flex items-center justify-center font-bold">
              ABCD
            </div>
            <div className="w-20 h-20 bg-green-600"></div>
            <div className="w-20 h-20 bg-blue-600"></div>
          </div>
        </div>
        <div className="absolute bottom-[18%] w-full">
          <div className="flex items-center justify-center">
            <a href="#About" className="text-3xl animate-bounce">
              <FontAwesomeIcon icon={faComputerMouse} />
            </a>
          </div>
        </div>
      </section>
      <section id="About"></section>
    </>
  );
}
