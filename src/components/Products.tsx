function Products() {
  const Card = ( { img, rating, title, price }) => {
    return (
      <div className="flex flex-1 flex-col w-full max-sm:w-full hoverBtn ">
        <img src={img} alt="" className="w-[280px] h-[280px] max-w-full bg-[#C9C8EE]" />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src="star.svg" alt="ícone de estrela" width="24" height="24" />
          <p className="text-xl leading-normal text-[#6d6d6d]">({rating})</p>
        </div>
        <h1 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{title}</h1>
        <p className="mt-2 font-semibold text-[#ff6452] text-2xl leading-normal">${price}</p>
      </div>
    )
  }
  return (
    <div className="lg:py-24 py-12 lg:px-16 px-8" id="products">
      <main className="container mx-auto max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5 ">
          <h2 className="text-5xl font-palanquin font-bold">
            <span className="text-[#ff6452]">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg text-[#6d6d6d] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing. 
            Ducimus adipisci ipsum id cumque minima</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mt-16 ">
          <Card  img='shoe1.png' price='200' rating='4.5' title='Nike'/>
          <Card  img='shoe2.png' price='200' rating='4.5' title='Nike'/>
          <Card  img='shoe3.png' price='200' rating='4.5' title='Nike'/>
          <Card  img='shoe4.png' price='200' rating='4.5' title='Nike'/>
        </div>
      </main>
    </div>
  );
}

export default Products;
