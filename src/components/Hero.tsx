import { useEffect, useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";

function Hero() {
  const [imageUrl, setImageUrl] = useState('shoe1.png');

  useEffect(() => {
    setImageUrl(imageUrl)
  }, [imageUrl]);

  return (
    <div>
      <div id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-y-10 container mx-auto">
        <section className="relative z-10 xl:w-2/5 flex flex-col justify-center items-start px-8 pt-28">
          <p className="text-xl text-[#ff6452]">Lorem ipsum dolor sit</p>
          <h1 className="mt-10 font-palanquin text-black text-8xl max-sm:text-[72px] peading-[106px] max-sm:leading-[82px] font-bold">
            <span className="bg-white relative z-10 pr-10 lg:text-8xl font-palanquin xl:whitespace-nowrap">
            The New Arrival
            </span> {" "}
            <br />
            <span className="text-[#ff6452] inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="text-[#6D6D6D] text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quas, distinctio repellat.
          </p>
          <button className="flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#FF6452] text-white hoverBtn">Shop now
            <HiArrowCircleRight className="ml-2 rounded-full text-2xl" />
          </button>
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            <div>
              <p className="text-5xl font-palanquin font-bold text-black">1k+</p>
              <p className="leading-7 font-montserrat text-[#6d6d6d]">Brands</p>
            </div>
            <div>
              <p className="text-5xl font-palanquin font-bold text-black">500+</p>
              <p className="leading-7 font-montserrat text-[#6d6d6d]">Shops</p>
            </div>
            <div>
              <p className="text-5xl font-palanquin font-bold text-black">250k</p>
              <p className="leading-7 font-montserrat text-[#6d6d6d]">Customers</p>
            </div>
          </div>
        </section>
        <section className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-[#EBEEFF]">
          <img src={imageUrl} alt="" width="610" height="500" className="object-contain relative z-10 max-w-full h-auto"/>
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            <div>
              <div style={{borderColor: imageUrl === 'shoe1.png' ? '#ff6452' : ''}} className="border-2 border-solid rounded-xl border-transparent cursor-pointer max-sm:flex-1">
                <div className="flex justify-center items-center bg-[#C9C8EE] sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                  <img 
                  src="shoe1.png" 
                  alt="thumbnail shoe1" 
                  width="127" 
                  height="103" 
                  className="object-contain max-w-full h-auto bg-[$ffff]"
                  onClick={() => setImageUrl('shoe1.png')}
                  />
                </div>
              </div>
            </div>
            <div>
              <div style={{borderColor: imageUrl === 'shoe2.png' ? '#ff6452' : ''}} className="border-2 border-solid rounded-xl border-transparent cursor-pointer max-sm:flex-1">
                <div className="flex justify-center items-center bg-[#C9C8EE] sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                  <img 
                  src="shoe2.png" 
                  alt="thumbnail shoe2" 
                  width="127" 
                  height="103" 
                  className="object-contain max-w-full h-auto"
                  onClick={() => setImageUrl('shoe2.png')}
                  />
                </div>
              </div>
            </div>
            <div>
              <div style={{borderColor: imageUrl === 'shoe3.png' ? '#ff6452' : ''}} className="border-2 border-solid rounded-xl border-transparent cursor-pointer max-sm:flex-1">
                <div className="flex justify-center items-center  bg-[#C9C8EE] sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                  <img 
                  src="shoe3.png" 
                  alt="thumbnail shoe3" 
                  width="127" 
                  height="103" 
                  className="object-contain max-w-full h-auto"
                  onClick={() => setImageUrl('shoe3.png')}
                  />
                </div>
              </div>
            </div>
            <div>
              <div style={{borderColor: imageUrl === 'shoe4.png' ? '#ff6452' : ''}} className="border-2 border-solid rounded-xl border-transparent cursor-pointer max-sm:flex-1">
                <div className="flex justify-center items-center  bg-[#C9C8EE] sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                  <img 
                  src="shoe4.png" 
                  alt="thumbnail shoe4" 
                  width="127" 
                  height="103" 
                  className="object-contain max-w-full h-auto"
                  onClick={() => setImageUrl('shoe4.png')}
                  />
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
