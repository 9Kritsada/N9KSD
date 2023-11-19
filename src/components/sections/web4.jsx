import Image from '../UI/image';

export default function web4() {
  const certifications = [
    {
      name: "Basic Cybersecurity",
      image: "test.png",
      link: "https://media.mooc.ncsa.or.th/certificate/NZ24BI0E7UQZP.pdf",
    },
  ];

  return (
    <>
      <section id="certifications">
        <h1 className="text-2xl font-bold">
          <span className="hash">#</span>Certifications
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certifications.map((e, index) => {
            return (
              <Image
                key={index}
                list={index}
                title={e.name}
                img={e.image}
                link={e.link}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
