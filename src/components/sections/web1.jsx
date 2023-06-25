export default function web1() {
  return (
    <>
      <section id="home">
        <div className="md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center ">
          <div className="space-y-5 order-2 md:order-1">
            <h1 className="text-5xl" data-aos="fade-right">
              I'm <span className="font-bold text-orange-600">Kritsada</span>
            </h1>
            <p className="opacity-80" data-aos="zoom-in">
              Welcome to my website. I am kritsada wiriya. I am form thailand
              and I am studying in computer engineer at rajamangala university
              of technology lanna. I am interested frontend and backend web
              developer.
            </p>
            <div className="pt-10 space-y-2" data-aos="flip-left">
              <h2 className="text-2xl" >Skills</h2>
              <div>
                <h2 className="text-lg opacity-60">Programming</h2>
                <div className="flex flex-wrap gap-1 mt-1">
                  <img src="https://img.shields.io/badge/React-45b8d8?style=for-the-badge&logo=react&logoColor=white" />
                  <img src="https://img.shields.io/badge/Vue-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white" />
                  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
                  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
                  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                  <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
                  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
                  <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center relative order-1 md:order-2" data-aos="zoom-out">
            <div className="h-52 w-52 bg-gradient-to-tr from-50% from-orange-600 to-50% to-amber-400 blur-3xl rounded-full absolute spin opacity-50"></div>
            <img
              src="/N9KSD_New.png"
              className="max-h-96 md:scale-125   lg:scale-150"
            />
          </div>
        </div>
      </section>
    </>
  );
}
