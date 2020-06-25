import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Navigation from "../components/Navigation";
import FloatWhatsapp from "../components/FloatWhatsapp";
import Portfolio from "../containers/Portfolio";
import Contact from "../containers/Contact";

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Navigation />
      <Portfolio limit={24} />
      <FloatWhatsapp />
      <Contact />
    </Layout>
  );
}
