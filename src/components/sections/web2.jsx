import Card from "../UI/card";

export default function web2() {
  const experience = [
    {
      title: "Hitman.GG",
      des: "this is website for my team make it with html/css in free day☀️",
      date: "Start : Nov 17, 2021",
      img: "exp1.png",
      link_github: "https://github.com/9Kritsada/Hitman.GG",
      link_website: "https://9kritsada.github.io/Hitman.GG/",
    },
    {
      title: "Clock",
      des: "i make it before new year's day wait to when the time willcome.",
      date: "Start : Dec 31, 2021",
      img: "exp2.png",
      link_github: "https://github.com/9Kritsada/Clock",
      link_website: "https://9kritsada.github.io/Clock/",
    },
  ];

  return (
    <>
      <section id="experience">
        <h1 className="text-2xl font-bold">
          <span className="hash">#</span>Experience
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {experience.map((e, index) => {
            return (
              <Card
                key={index}
                list={index}
                title={e.title}
                des={e.des}
                date={e.date}
                img={e.img}
                link_github={e.link_github}
                link_website={e.link_website}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
