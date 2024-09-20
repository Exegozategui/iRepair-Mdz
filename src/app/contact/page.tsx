import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | iRepair Mza ",
  description: "Contáctanos para asistencia técnica y consultas sobre productos.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contacto"
        description="Estamos aquí para ayudarte. Si tienes alguna pregunta sobre nuestros servicios o productos, no dudes en contactarnos."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
