export default function web3() {
  const contect = [
    {
      socails: "Instagram",
      name: "kr__it.__",
      href: "https://instagram.com/kr_it._/",
      color: "%23E4405F",
    },
    {
      socails: "facebook",
      name: "9Kritsada",
      href: "https://www.facebook.com/9Kritsada/",
      color: "1877F2",
    },
    {
      socails: "github",
      name: "9Kritsada",
      href: "https://github.com/9Kritsada/",
      color: "12100E",
    },
    {
      socails: "gmail",
      name: "kritsada.wiriya@gmail.com",
      href: "mailto:kritsada.wiriya@gmail.com",
      color: "D14836",
    },
  ];
  return (
    <>
      <section id="contect">
        <h1 className="text-2xl font-bold"><span className="hash">#</span>Contact</h1>
        <div className="flex flex-col space-y-1">
          {contect.map((e) => {
            return (
              <a align="center" href={e.href} target="_blank">
                <img
                  src={`https://img.shields.io/badge/${e.name}-${e.color}?style=for-the-badge&logo=${e.socails}&logoColor=white`}
                />
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
