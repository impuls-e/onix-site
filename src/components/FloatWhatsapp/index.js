import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { WhatsButton } from "./styles";

export default function FloatWhatsapp() {
  return (
    <WhatsButton
      data-sal="slide-up"
      data-sal-delay="1000"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <a href="https://wa.me/5548996869903" target="_blank">
        {" "}
        <FaWhatsapp size={40} />
      </a>
    </WhatsButton>
  );
}
