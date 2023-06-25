export default function web2() {
  const experience = [
    {
      title: "Hitman.GG",
      des: "this is website for my team make it with html/css in free day☀️",
      date: "Start : Nov 17, 2021",
      img: "exp1.png",
      link: "https://9kritsada.github.io/Hitman.GG/",
    },
    {
      title: "Clock",
      des: "i make it before new year's day wait to when the time willcome.",
      date: "Start : Dec 31, 20212",
      img: "exp2.png",
      link: "https://9kritsada.github.io/Clock/",
    },
  ];

  return (
    <>
      <section id="experience">
        <h1 className="text-2xl font-bold"><span className="hash">#</span>Experience</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {experience.map((e) => {
            return (
              <a href={e.link} target="_blank">
                <div className="rounded-lg overflow-hidden shadow-lg shadow-black/40 border border-white/10 h-full">
                  <img
                    // src="../../../public/exp1.png"
                    src={`/${e.img}`}
                    className="aspect-video object-cover"
                  />
                  <div className="p-5 space-y-2 h-full">
                    <p className="text-sm opacity-40">{e.date}</p>
                    <h1 className="text-xl font-bold">{e.title}</h1>
                    <p className="line-clamp-3 opacity-80">{e.des}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
