
const Footer = () => {
  return (
    <div className="bg-slate-600 flex flex-col w-[100%] text-center text-white overflow-hidden">
      <a href=""> <p className=" bg-slate-700 rounded-t-lg p-2 ">Back to top</p></a>

      <div className="bg-slate-800 flex rounded-b-lg gap-[2rem] md:gap-[8rem] justify-center items-center md:py-8 py-4">
        <div className="m-0  flex flex-col gap-1 ">
          <p className="font-bold text-[orange] ">Get to Know Us</p>
          <p className="text-left">Careers</p>
          <p className="text-left">Blog</p>
          <p className="text-left">About Oward</p>
        </div>
        <div className="m-0  flex flex-col gap-1">
          <p className="font-bold text-[orange] text-left ">Make Money With Us</p>
          <p className="text-left">Sell Product on Oward</p>
          <p className="text-left">Become an Affiliate</p>
          <p className="text-left">Advertise your products</p>
        </div>
      </div>
      <span className="p-[1rem] md:p-[2rem]">Copyright &copy; <strong>2025</strong></span>

    </div>
  );
};

export default Footer;
