function Footer() {
  return (
    <footer className="bg-[#131313] lg:px-16 px-8 lg:pt-24 pt-12 pb-8">
      <section className="container mx-auto">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src="logonike.png" alt="Logo Nike" width='150' height='46 ' />
            </a>
            <p className="mt-6 text-base leading-7 text-[#fffc] sm:max-w-sm">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae voluptatibus explicabo fuga.
            </p>
            <div className="flex items-center gap-5 mt-8">
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src="facebook.svg" alt="Logo facebook" width='24' height='24' />
              </div>
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src="twitter.svg" alt="Logo twitter" width='24' height='24' />
              </div>
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src="instagram.svg" alt="Logo instagram" width='24' height='24' />
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            <div>
              <h4 className="text-white text-2xl leading-normal font-medium mb-6">Products</h4>
              <ul className="p-0">
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Air force 1
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Air max cortex
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Air dunk low
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Air drop jordan
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Air plus tn
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Air 97 fn
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-2xl leading-normal font-medium mb-6">Help</h4>
              <ul>
              <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  About
                </li>
              <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  FAQs
                </li>
              <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  How it works
                </li>
              <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Privacy policy
                </li>
              <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Payment policy
                </li>
              </ul>
            </div>
            <div>
            <h4 className="text-white text-2xl leading-normal font-medium mb-6">Get in touch</h4>
              <ul>
              <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  customer@nike.com
                </li>
              <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  +55 (31) 99672-9996
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-[#fffc] mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
            <p>© 2024 Copyright, all rights reserved</p>
          </div>
          <p className="cursor-pointer">Term & Conditions</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
