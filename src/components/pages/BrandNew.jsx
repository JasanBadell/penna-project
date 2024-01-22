import { useParams } from "react-router-dom";
import { brandNews, brandimg, brandimg1, brands } from "../../assets/dummy";
import Button from "../Button";
import InstalsModal from "../InstalsModal";
import { useState } from "react";

function BrandNew() {
  const { id } = useParams();

  const [showCertifications, setShowCertifications] = useState(false);

  const handleShowCertifications = () => {
    setShowCertifications(true);
  };

  const handleCloseCertifications = () => {
    setShowCertifications(false);
  };

  // Buscar la noticia correspondiente en el arreglo brandnews
  const noticia = brandNews.find((noticia) => noticia.brandnewId === id);

  if (!noticia) {
    return <div>Noticia no encontrada</div>;
  }

  return (
    <>
      <div className="overflow-hidden bg-white mt-32 lg:mt-52 ml-0 lg:ml-20 ">
        <div className="flex  flex-col place-items-start ml-0 mb-8">
          <p className="text-1xl lg:text-3xl font-extralight mx-8 lg:mx-0 text-defaultBlue leading-snug uppercase">
            nuestras noticias,
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-defaultBlue leading-snug lg:mx-0 mx-8 uppercase">
            {noticia.title}
          </h3>
        </div>
      </div>
      <img
        src={noticia.port_img}
        alt="Imagen de la noticia"
        className="w-full"
      />
      <div className="flex  flex-col lg:flex-row place-items-start lg:justify-between mx-8 lg:mx-32 my-4 lg:my-8 text-defaultRed">
        <p className="lg:mx-4">Autor: {noticia.autor}</p>
        <p className="lg:mx-4">Fuente: {noticia.fountain}</p>
      </div>
      <div>
        <h3 className="text-2xl lg:text-4xl text-defaultBlue mx-8 lg:mx-20 font-extrabold ">
          {noticia.description}
        </h3>
        <div className="mx-8">
          <div>
            <p className="flex flex-col lg:flex-row lg:justify-between py-4 lg:p-space lg:mr-60 lg:ml-40 mb-2">
              {noticia.content1}
            </p>
            <p className="flex flex-col lg:flex-row lg:justify-between py-4 lg:p-space lg:mr-60 lg:ml-40 mb-6">
              {noticia.content2}
            </p>
            <p className="flex flex-col lg:flex-row lg:justify-between py-4 lg:p-space lg:mr-60 lg:ml-40 mb-6">
              {noticia.content3}
            </p>
          </div>
          <div className="flex flex-row-reverse items-start lg:items-end lg:-mt-32">
            <img src={brands} alt="img" className="lg:w-1/4 w-0" />
          </div>
        </div>
      </div>
      <div className="bg-defaultBlue flex flex-col lg:flex-row-reverse items-center">
        <div className="text-white w-screen lg:w-3/6 my-8">
          <p className="text-xl md:text-2xl font-extralight mx-8 leading-snug mb-2">
            VANGUARDIA
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold lg:w-5/6 mx-8 leading-snug mb-4">
            PRESENTES EN LA ESCENA NACIONAL
          </h3>
          <p className="md:text-2xl mx-8">
            En el año alcanzamos un surtido de más de 45 tipos de equipos, entre
            sencillos y complejos. Hemos cubierto el 83% de la demanda nacional
            en remolques, semirremolques y aplicaciones.
          </p>
        </div>
        <img
          src={brandimg}
          alt="Imagen de remolque rojo"
          className="w-full lg:w-1/2"
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="text-defaultBlue mt-10 flex flex-col items-start mx-8 lg:mx-20">
          <p className="text-xl md:text-2xl font-extralight leading-snug ">
            CONÓCENOS,
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold leading-snug">
            VISITA NUESTRAS INSTALACIONES
          </h3>
          <div onClick={handleShowCertifications}>
            <Button />
          </div>
          <InstalsModal
            isVisible={showCertifications}
            onClose={handleCloseCertifications}
          />
        </div>
        <div></div>
        <img
          src={brandimg1}
          alt="Imagen de un ranchon"
          className="w-full lg:w-1/2"
        />
      </div>
    </>
  );
}

export default BrandNew;
