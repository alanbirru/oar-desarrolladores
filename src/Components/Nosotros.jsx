import { nosotros } from "../index";

const Nosotros = ({ marginBottom }) => {
  return (
    <section
      className={`container mx-auto flex justify-center items-center flex-wrap lg:w-auto w-[85%]   gap-8 ${marginBottom}`}
    >
      <div>
        <span className="text-xl text-cyan-500 font-bold">{nosotros.span}</span>
        <h2 className=" text-black lg:w-[700px]">{nosotros.title}</h2>
        <p className="text-lg text-slate-600 leading-loose lg:w-[450px] w-[90%] mb-[2.5rem] mt-[2.5rem]">
          {nosotros.content}
        </p>

        <div className="flex flex-col gap-4">
          {nosotros.points.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-4">
                <img
                  className="w-[70px] p-2 bg-cyan-500 rounded-lg"
                  src={item.icon}
                  alt="icon"
                />
                <h4>{item.title}</h4>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" hover:scale-110 transition-transform">
        <img src={nosotros.image} alt="nosotros" />
      </div>
    </section>
  );
};

export default Nosotros;
