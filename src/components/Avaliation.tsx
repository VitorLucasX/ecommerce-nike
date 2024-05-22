function Avaliation() {
  return (
    <div className="lg:py-24 py-12 lg:px-16 px-8 bg-[#f5f6ff]">
      <div className="container mx-auto">
        <h1 className="font-palanquin text-center text-5xl font-bold">What Our
        <span className="text-[#ff6452]"> Customers</span> Say?
        </h1>
        <p className="text-lg text-[#6d6d6d] leading-7 m-auto mt-4 max-w-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing
           elit sit amet consectet ur with us.
        </p>
      </div>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        <div className="flex justify-center items-center flex-col">
        <img src="customer.png" alt="customer1" className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="m5-6 max-w-sm text-center text-lg text-[#6d6d6d] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorum, dolore. Eius voluptates!
        </p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
          <img 
          src="star.svg" 
          alt="star icon" 
          width='24' height='24' 
          className="object-contain m-0"
          />
          <p className="text-xl text-[#6d6d6d]">(4.5)</p>
        </div>
        <h1 className="mt-1 font-palanquin text-3xl text-center font-bold">Morich Brown</h1>
        </div>
        <div className="flex justify-center items-center flex-col">
        <img src="customer.png" alt="customer1" className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="m5-6 max-w-sm text-center text-lg text-[#6d6d6d] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorum, dolore. Eius voluptates!
        </p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
          <img 
          src="star.svg" 
          alt="star icon" 
          width='24' height='24' 
          className="object-contain m-0"
          />
          <p className="text-xl text-[#6d6d6d]">(4.5)</p>
        </div>
        <h1 className="mt-1 font-palanquin text-3xl text-center font-bold">Morich Brown</h1>
        </div>
      </div>
    </div>
  );
}

export default Avaliation;
