import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Sobre Nosotros | iRepair Mza",
  description: "Conoce más sobre iRepair Mza, tu servicio técnico Apple en Mendoza con más de 10 años de experiencia en reparaciones y ventas de accesorios.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre Nosotros"
        description="En iRepair Mza, nos dedicamos a ofrecer servicios técnicos de alta calidad para productos Apple. Con más de 10 años de experiencia, estamos aquí para atender tus necesidades de reparación y venta de accesorios."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
