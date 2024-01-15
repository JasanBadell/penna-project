import { products } from "../assets/dummy";
import { Card } from "@material-tailwind/react";

const Tabs = () => {
  const itemToShow = products.slice(0, 4);

  return (
    <>
      <div className="flex justify-center items-start lg:py-8 m-4 lg:mx-20">
        <div className="flex  lg:flex-col gap-y-2 lg:w-full">
          <div className=" lg:flex hidden lg:flex-row  p-2 rounded-xl lg:w-auto">
            {itemToShow.map((item) => (
              <Card
                className="mx-8 mb-12 rounded-none shadow-2xl"
                key={item.id}
              >
                <div className="flex flex-col">
                  <img src={item.img} alt="" />
                  <div className="m-5">
                    <h3 className="text-base text-left font-semibold uppercase">
                      {item.title}
                    </h3>
                    <p className="text-sm text-left mt-2">{item.category}</p>
                    <p className="text-sm text-left mb-2 text-defaultRed">
                      {item.subCategory}
                    </p>
                    <p className="text-sm text-left">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
