import { useEffect } from "react";
import ContactForm from "./section/contact-form";
import ContactInfoSection from "./section/contact-info-section";
import ContactHeroSection from "./section/hero-section";
import ContactBodySection from "./section/body-section";
import { Helmet } from "react-helmet-async";

export default function ContactUs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <Helmet>
        <title>Hubungi Kami | Oceaneyes Indonesia</title>
      </Helmet>
      <div className="flex flex-col w-full">
        <ContactHeroSection />
      </div>
    </>
  )
}