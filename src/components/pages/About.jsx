/* eslint-disable react/jsx-key */
import React from "react";
import News from "../News";
import Clients from "../Clients";
import { aboutColumn1, aboutColumn2, bannerContent } from "../../assets/dummy";
import Banner from "../Banner";
import Vanguard from "../Vanguard";

const About = () => {
  return (
    <>
      <Banner
        content={bannerContent[0]}
      />
      <div className="mt-4 mx-8 lg:ml-20">
        <div className="flex flex-col lg:flex-row lg:justify-between py-4 lg:p-space lg:mr-60 lg:ml-40 mb-6">
          <div className="flex flex-col text-xxl lg:p-space mx-2 w-full lg:w-6/12">
            {aboutColumn1.map(
              ({ id, title, conten, conten2, conten3, conten4 }) => (
                <div accessKey={id}>
                  <h4 className="font-bold my-4">{title}</h4>
                  <p className="my-4">{conten}</p>
                  <p className="my-4">{conten2}</p>
                  <p className="my-4">{conten3}</p>
                  <p className="my-4">{conten4}</p>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col text-xxl lg:p-space mx-2 w-full lg:w-6/12">
            {aboutColumn2.map(
              ({ id, title, conten, conten2, conten3, conten4, conten5 }) => (
                <div accessKey={id}>
                  <h4 className="font-bold my-4">{title}</h4>
                  <p className="my-4">{conten}</p>
                  <p className="my-4">{conten2}</p>
                  <p className="my-4">{conten3}</p>
                  <p className="my-4">{conten4}</p>
                  <p className="my-4">{conten5}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Vanguard />
      <News />
      <Clients />
    </>
  );
};

export default About;
