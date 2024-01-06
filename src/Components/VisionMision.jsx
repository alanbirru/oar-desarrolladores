import { visionMision } from "../index";
import SectionTitle from "./SectionTitle";

const VisionMision = ({ marginBottom }) => {
  return (
    <section className="lg:w-[100%] w-[85%] mx-auto">
      <div className=" flex flex-col items-center mb-[2.5rem]">
        <SectionTitle title={visionMision.title} color={"text-black"} />
        <h4 className=" text-center  text-cyan-500">{visionMision.valores}</h4>
      </div>

      <div
        className={`flex items-center justify-center flex-wrap  lg:gap-20 gap-8 ${marginBottom}`}
      >
        {visionMision.cards.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col w-[600px] justify-center items-center gap-4 p-7 shadow-lg  rounded-lg border-b-4 border-white hover:border-cyan-500 hover:scale-110 transition-all hover:shadow-2xl"
            >
              <h4>{item.title}</h4>
              <img src={item.gif} alt="" className=" w-[200px]" />
              <p className=" text-center text-lg text-slate-600 leading-loose">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VisionMision;
