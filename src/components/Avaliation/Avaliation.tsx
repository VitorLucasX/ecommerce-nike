import Slider from "react-slick";

function Avaliation() {

  const avaliationData = [
    {
      id: 1,
      name: "Samuel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 1,
      name: "Smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  }

  return (
    <>
    <div className="py-10">
      <div className="container">
           {/* Header section */}
           <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent 
            bg-gradient-to-r from-primary to-secondary">
              feedbacks
            </p>
            <h1 className="text-3xl font-bold dark:text-white">Avaliações</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique quod voluptates possimus a veritatis consequuntur
              sit quia ad minima quis totam sequi ipsam odit, iure, modi, 
              corrupti eius hic voluptatibus?
            </p>
          </div>
          {/* Avaliação Section*/}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
              {
                avaliationData.map(({id, name, text, img}) => {
                  return <div key={id} 
                  className="my-6">
                      <div 
                      className="flex flex-col justify-center items-center gap-4 text-center shadow-lg mx-4 rounded-xl dark:bg-[#242424] bg-primary/10 relative p-4">
                      <img src={img} alt="" className="rounded-full block mx-auto" />
                      <p className="text-gray-500 text-sm">{text}</p>
                      <h1 className="text-xl font-bold dark:text-white">{name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-gray-500">,,</p>
                    </div>
                  </div>
                })
              }
            </Slider>
          </div>
      </div>
    </div>
    </>
    
  );
}

export default Avaliation;
