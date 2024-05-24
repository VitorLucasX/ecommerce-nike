import { default as Img2 } from '/biryani2.png';
import { default as Img3 } from '/biryani3.png';
import { default as Img4 } from '/biryani5.png';

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Biryani",
    description:
     "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet."
  },
  {
    id: 2,
    img: Img3,
    name: "Frango Kari",
    description:
     "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet."
  },
  {
    id: 3,
    img: Img4,
    name: "Café Frio",
    description:
     "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet."
  },

]


function Services() {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent 
            bg-gradient-to-r from-primary to-secondary">
              Nossos Serviços
            </p>
            <h1 className="text-3xl font-bold dark:text-white">Serviços</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique quod voluptates possimus a veritatis consequuntur
              sit quia ad minima quis totam sequi ipsam odit, iure, modi, 
              corrupti eius hic voluptatibus?
            </p>
          </div>
          {/* Card section */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-14 md:gap-5 place-items-center md:grid-cols-3'>
            {ServicesData.map(({ id, img, name, description}) => {
              return (
                <div key={id} 
                 className='max-w-[300px] group rounded-2xl
                 bg-white dark:bg-[#242424] dark:text-white hover:text-white hover:bg-secondary dark:hover:bg-secondary duration-300 shadow-xl'
                 >
                <div className='h-[100px]'>
                  <img src={img} alt="" 
                  className='max-w-[200px] mx-auto
                  block transform -translate-y-14 
                  group-hover:scale-105 group-hover:rodate-6 
                  duration-300'
                  />
                </div>
                <div className='p-4 text-center'>
                  <h1 className='text-xl font-bold'>{name}</h1>
                  <p className='text-gray-500 text-sm duration-300 line-clamp-2'>{description}</p>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
