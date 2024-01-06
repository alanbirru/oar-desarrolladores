import { misProyectos } from "../index";

const MisProyectos = ({ marginBottom }) => {
  return (
    <section
      className={`container  w-[85%] lg:w-[800px] mx-auto ${marginBottom}`}
    >
      <div>
        <div className="flex flex-col gap-8">
          <div>
            <span className=" text-xl text-cyan-500 font-bold">
              {misProyectos.span}
            </span>
            <h2 className="text-black">{misProyectos.title}</h2>
            <p className="text-lg text-slate-600 leading-loose">
              {misProyectos.content}
            </p>
          </div>
          <ul className=" flex flex-col gap-6">
            {misProyectos.atracciones.map((item, index) => {
              return (
                <li key={index} className=" flex items-start gap-6">
                  <img src={item.number} alt="" />

                  <div className="flex flex-col gap-3 justify-center">
                    <h4>{item.title}</h4>
                    <p className=" text-lg  text-slate-600 leading-loose">
                      {item.content}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MisProyectos;
