import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPager } from "@fortawesome/free-solid-svg-icons";

export default function card(props) {
  return (
    <>
      <div>
        <div
          className="rounded-lg overflow-hidden hover:shadow-lg shadow-black/40 border border-white/0 hover:border-white/10 duration-300"
          data-aos="fade-up"
          data-aos-delay={50 + (props.list + 1) * 50}
        >
          <img
            src={`/${props.img}`}
            className="aspect-video object-cover rounded-lg"
          />
          <div className="p-3 space-y-2 h-full">
            <p className="text-sm opacity-40">{props.date}</p>
            <h1 className="text-xl font-bold">{props.title}</h1>
            <p className="line-clamp-3 opacity-80">{props.des}</p>
          </div>
          <div className="p-3 flex gap-3">
            <a
              href={props.link_github}
              target="_blank"
              className="text-center px-2 w-full bg-gray-700 py-1 rounded-md text-white"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-1" />
              GITHUB
            </a>
            <a
              href={props.link_website}
              target="_blank"
              className="text-center px-2 w-full bg-green-700 py-1 rounded-md text-white"
            >
              <FontAwesomeIcon icon={faPager} className="mr-1" />
              WEBSITE
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
