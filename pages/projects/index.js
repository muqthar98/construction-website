import React, { useState } from "react";
import image4 from "../../public/assets/image4.jpeg";
import image25 from "../../public/assets/image25.jpeg";
import image26 from "../../public/assets/image26.jpeg";
import image27 from "../../public/assets/image27.jpeg";
import image28 from "../../public/assets/image28.jpeg";
import image29 from "../../public/assets/image29.jpeg";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="min-w-[14rem] h-max overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <Image
        className="object-cover object-center w-full h-56"
        src={props.img}
        layout="responsive"
        alt="avatar"
        height={props.height}
      />

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {props.title}
        </h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">{props.heading}</p>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
            />
          </svg>

          <h1 className="px-2 text-sm">{props.location}</h1>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeStyle = `h-10 px-4 py-2 -mb-px text-sm text-center
  text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400
   dark:text-blue-300 whitespace-nowrap focus:outline-none`;

  const normalStyle = `h-10 px-4 py-2 -mb-px text-sm text-center
   text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white 
   whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400`;

  const changeTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <>
            <Card
              img={image28}
              title="Global Elite"
              heading="Ongoing"
              location="Redhills"
            />
            <Card
              img={image4}
              title="Global New Town"
              heading="Ongoing"
              location="Manali"
            />
             <Card
              img={image27}
              title="Global Dezire"
              heading="Ongoing"
              location="Pallavaram"
            />
            <Card
              img={image25}
              title="Global Compess"
              heading="Ongoing"
              location="Kodambakkam"
              height={930}
            />
          </>
        );
        break;
      case 1:
        return (
          <>
            <Card
              img={image26}
              title="Global corner"
              heading="Upcoming"
              location="Noombal "
            />
            <Card
              img={image29}
              title="Global Venture"
              heading="Upcoming"
              location="Kolapakkam"
              height={800}
            />
          </>
        );
        break;
      case 2:
        return (
          <>
            <Card
              img={image4}
              title="Global Icon"
              location="Residential"
              heading="Kodambakkam"
            />
            <Card
              img={image4}
              title="Global square"
              location="Adambakkam "
              heading="Residential"
            />
            <Card
              img={image4}
              title="Global Cube"
              location="Kodambakkam"
              heading="Residential"
            />
            <Card
              img={image4}
              title="Global Peace"
              location="Kodambakkam"
              heading="Residential"
            />
            <Card
              img={image4}
              title="Global Enrich"
              location="Kodambakkam"
              heading="Residential"
            />
            <Card
              img={image4}
              title="Global Fantasy"
              location="Kodambakkam"
              heading="Residential"
            />
          </>
        );
        break;
      case 3:
        return (
          <>
            <Card
              img={image4}
              title="Global Bazzar"
              heading="Commercial"
              location="T-Nagar"
            />
          </>
        );
        break;
      default:
        return <div>No Content!</div>;
    }
  };

  return (
    <div className="py-28 md:py-28 dark:bg-gray-800 flex flex-col items-center justify-center gap-8">
      <h1 className="text-lg font-bold text-center lg:text-2xl dark:text-white">
        PROJECTS
      </h1>
      <div className="flex flex-wrap gap-2 justify-center border-b border-gray-200 dark:border-gray-700 ">
        <button
          className={activeTab === 0 ? activeStyle : normalStyle}
          onClick={() => {
            setActiveTab(0);
          }}
        >
          On-going projects
        </button>

        <button
          className={activeTab === 1 ? activeStyle : normalStyle}
          onClick={() => {
            setActiveTab(1);
          }}
        >
          Up-coming projects
        </button>

        <button
          className={activeTab === 2 ? activeStyle : normalStyle}
          onClick={() => {
            setActiveTab(2);
          }}
        >
          Residential
        </button>
        <button
          className={activeTab === 3 ? activeStyle : normalStyle}
          onClick={() => {
            setActiveTab(3);
          }}
        >
          Commercial
        </button>
      </div>
      <div
        id="tabs-content"
        className="container flex flex-wrap gap-16 justify-center min-h-[60vh] text-white dark:text-white "
      >
        {changeTabContent()}
      </div>
    </div>
  );
};

export default Projects;
