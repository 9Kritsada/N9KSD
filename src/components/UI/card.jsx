export default function card(props) {
  return (
    <>
      <a
        href={props.link}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay={50 + ((props.list+1)*50)}
      >
        <div className="rounded-lg overflow-hidden shadow-lg shadow-black/40 border border-white/10 h-full">
          <img src={`/${props.img}`} className="aspect-video object-cover" />
          <div className="p-5 space-y-2 h-full">
            <p className="text-sm opacity-40">{props.date}</p>
            <h1 className="text-xl font-bold">{props.title}</h1>
            <p className="line-clamp-3 opacity-80">{props.des}</p>
          </div>
        </div>
      </a>
    </>
  );
}
