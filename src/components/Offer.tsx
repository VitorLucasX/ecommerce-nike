import { HiArrowCircleRight } from "react-icons/hi";

function Offer() {
  return (
    <div className="lg:py-24 py-12 lg:px-16 px-8">
      <div className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
          <img src="offer.png" alt="offer" width='773' height='687' className="object-contain w-full max-w-full h-auto" />
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="font-palanquin text-5xl capitalize font-bold lg:max-w-lg">
            <span className="text-[#ff6452]">Special</span> Offer
          </h1>
          <p className="mt-4 lg:max-w-lg text-[#6d6d6d] text-lg leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Aliquid velit quis in accusantium molestias possimus sed, 
             porro odit quia vero eum voluptates.
          </p>
          <p className="mt-4 lg:max-w-lg text-[#6d6d6d] text-lg leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Aliquid velit quis in accusantium molestias possimus sed, 
             porro odit quia vero eum voluptates.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <button className="flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#FF6452] text-white hoverBtn">
              Shop now
              <HiArrowCircleRight className="ml-2 rounded-full text-2xl" />
            </button>
            <button className="flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#FF6452] text-white hoverBtn">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
