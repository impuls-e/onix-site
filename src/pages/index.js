import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Navigation from "../components/Navigation";
import FloatWhatsapp from "../components/FloatWhatsapp";
import Hero from "../containers/Hero";
import About from "../containers/About";
import Services from "../containers/Services";
import Contact from "../containers/Contact";

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Navigation />
      <Hero />
      <Services />
      <FloatWhatsapp />
      <About />
      <Contact />
    </Layout>
  );
}
