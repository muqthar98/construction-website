import React from "react";
import image4 from "../../public/assets/image4.jpeg"
import Image from "next/image";

function aboutUs() {
  return (
    <>
      <div className="min-h-screen place-items-center container grid md:grid-cols-2 grid-cols-1 pt-32 md:pt-0 gap-0">
        <div>
          <Image src={image4} alt="" width={300} height={300}/>
        </div>
        <div className="p-5">
          <p>We Global Sanitary Consultancy was established on 14/01/2008 by Mr.Prabhu 
          Jayapal and we are engaged in the business of construction, Renovation. Plumbing, Painting, 
          Electrical, Carpentry. Modular kitchen,wardrobe, complete civil and sanitary works for 
          residential and commercial building.We ensure that all our projects meet the necessary guidelines for the structural 
          stability of the building and are subjected to many quality tests, starting from 
          selection of the site, architects, consultants, vendors, material procurement 
          followed by structural design to meet the quality guidelines set forth by the 
          prevailing norms and codes of the country.</p>
        </div>
      </div>
    </>
  );
}

export default aboutUs;
