import React, { useEffect } from "react";

function FAQPhoto() {
  useEffect(() => {
    var swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);
  return <div></div>;
}

export default FAQPhoto;
