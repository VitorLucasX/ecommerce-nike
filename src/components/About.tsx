import React from 'react';

interface CardProps {
  img: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ img, title, text }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hoverBtn">
      <div className="w-11 h-11 justify-center items-center bg-[#ff6452] rounded-full">
        <img src={img} alt="card" width='24' height='24' className="m-auto pt-2"/>
      </div>
      <h1 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{title}</h1>
      <p className="mt-3 break-words text-lg leading-normal text-[slate-gray]">{text}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <>
     <div id="about" className="lg:py-24 py-12 lg:px-16 px-8">
      <main className="container mx-auto flex justify-between items-center max-lg:flex-col gap-10 w-full">
        <div className="flex flex-1 flex-col">
          <h1 className="font-palanquin text-5xl leading-[58px] capitalize font-bold lg:max-w-lg">
          We provide You
          <span className="text-[#ff6452]"> Super</span>
          <span className="text-[#ff6452]"> Quality</span> Shoes
          </h1>
          <p className="mt-4 lg:max-2-lg text-lg text-[#6d6d6d] leading-7">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Vel sapiente mollitia nulla, dicta commodi enim necessitatibus
           est autem at facere laborum animi minima tempora adipisci.
           </p>
           <p className="mt-6 lg:max-w-lg text-lg text-[#6d6d6d] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <div className="mt-11">
            <button className="flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#ff6452] text-white hoverBtn">View Details</button>
            </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img 
          src="shoe4.png" 
          alt="shoe4" 
          width='570' 
          height='522' 
          className="bg-[#C9C8EE] object-contain max-w-full h-auto"
          />
        </div>
      </main>
    </div>
    <div className="lg:px-16 px-8 py-10">
      <div className="flex justify-center flex-wrap gap-9">
        <Card img='truck-fast.svg' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam similique mollitia perspiciatis.' title='free shipping'/>
        <Card img='shield-tick.svg' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam similique mollitia perspiciatis.' title='free shipping'/>
        <Card img='support.svg' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam similique mollitia perspiciatis.' title='free shipping'/>
      </div>
    </div>
    </>
  );
}

export default About;
