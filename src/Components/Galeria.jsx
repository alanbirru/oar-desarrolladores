import { galeriaMonarcaResidencial } from "../index";
import SectionTitle from "./SectionTitle";

const Galeria = ({ gallery, imgLink, title, marginBottom }) => {
  return (
    <section
      className={`flex flex-col gap-7 justify-center items-center p-7 bg-black ${marginBottom}`}
    >
      <SectionTitle title={title} color={"text-white"} />
      <div className="flex h-[500px]">
        {gallery.map((picture, index) => {
          return (
            <img
              key={index}
              src={picture}
              alt="picture"
              className=" flex-1 min-w-0 object-cover cursor-pointer transition-all duration-500 hover:flex-[5]"
              loading="lazy"
            />
          );
        })}
      </div>
      <a href={imgLink} target="_blank">
        <button className=" bg-cyan-500 m-auto p-5 rounded-lg font-bold sm:text-2xl text-base text-white mt-4 hover:scale-125 transition-all duration-200">
          ¡VISITA NUESTRO SITIO WEB!
        </button>
      </a>
    </section>
  );
};

export default Galeria;
