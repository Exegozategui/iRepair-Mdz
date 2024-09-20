import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
  <div className="container">
    <div className="-mx-4 flex flex-wrap items-center">
      <div className="w-full px-4 lg:w-1/2">
        <div
          className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
          data-wow-delay=".15s"
        >
          <Image
            src="/images/about/about-image-2.svg"
            alt="about image"
            fill
            className="drop-shadow-three dark:hidden dark:drop-shadow-none"
          />
          <Image
            src="/images/about/about-image-2-dark.svg"
            alt="about image"
            fill
            className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
          />
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2">
        <div className="max-w-[470px]">
          <div className="mb-9">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Servicio Técnico Apple
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Nos especializamos en la reparación de dispositivos Apple, desde iPhones hasta MacBooks, utilizando piezas originales y técnicas avanzadas para garantizar un servicio de calidad.
            </p>
          </div>
          <div className="mb-9">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Reparaciones de Placas
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Contamos con expertos en microelectrónica para realizar reparaciones a nivel de placa base, restaurando el funcionamiento completo de tu dispositivo.
            </p>
          </div>
          <div className="mb-1">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Más de 10 años de experiencia
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Con más de una década de experiencia en el sector, nos enorgullecemos de brindar un servicio técnico profesional y confiable en la ciudad de Mendoza.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default AboutSectionTwo;
