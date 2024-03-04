const PoweredByLSIFooter = () => {
  return (
    <div className="absolute top-[440px] left-[0px] w-[1443px] h-[94px] overflow-hidden text-left text-base text-black font-inter">
      <div className="absolute top-[29px] left-[0px] bg-gainsboro w-[1443px] h-[51px]" />
      <div className="absolute top-[35px] left-[633px] w-[180px] h-[39px]">
        <div className="absolute top-[10px] left-[55px] font-semibold flex items-center w-[125px] h-[18px]">
          Powered by LSI
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[42px] h-[39px] object-cover"
          alt=""
          src="/company-logo-1-1@2x.png"
        />
      </div>
    </div>
  );
};

export default PoweredByLSIFooter;
