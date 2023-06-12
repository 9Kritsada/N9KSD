import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";

export default function web1() {
  return (
    <>
      <section id="section1">
        <div className="flex h-screen items-center justify-center">
          <div className="flex items-center justify-evenly w-full md:w-3/5 space-x-2">
            <div className="w-20 h-96 bg-red-600 flex items-center justify-center font-bold">
              ABCD
            </div>
            <div className="w-20 h-20 bg-green-600"></div>
            <div className="w-20 h-20 bg-blue-600"></div>
          </div>
        </div>

        <div className="absolute bottom-[18%] w-full">
          <div className="flex items-center justify-center">
            <a href="#section2" className="text-3xl animate-bounce">
              <FontAwesomeIcon icon={faComputerMouse} />
            </a>
          </div>
        </div>

      </section>
    </>
  );
}
