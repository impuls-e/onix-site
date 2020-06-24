import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Navigation from "../components/Navigation";
import FloatWhatsapp from "../components/FloatWhatsapp";
import Hero from "../containers/Hero";
import About from "../containers/About";
import Portfolio from "../containers/Portfolio";
import Contact from "../containers/Contact";

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Navigation />
      <Hero />
      <Portfolio />
      <FloatWhatsapp />
      <About />
      <Contact />
    </Layout>
  );
}
