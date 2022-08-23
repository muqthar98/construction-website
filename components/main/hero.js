import React from "react";
import Image from "next/image"
import image1 from "../../public/assets/image1.jpeg"
import image2 from "../../public/assets/image2.jpeg"
import image4 from "../../public/assets/image4.jpeg"
import { Card } from "flowbite-react";

const Hero = () => {
  return (
   <div className="object-center w-full bg-cover bg-no-repeat">
    <Image src={image4} layout={'responsive'}/>
   </div>
  );
};

export default Hero;
