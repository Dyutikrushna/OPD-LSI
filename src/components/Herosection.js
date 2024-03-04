const Herosection = () => {
  return (
    <div className="absolute top-[82px] left-[0px] shadow-[-1px_-18px_250px_rgba(0,_0,_0,_0.25)] w-[1440px] h-[644px] overflow-hidden text-left text-29xl text-black font-inter lg:w-[1190px]">
      <img
        className="absolute top-[266px] left-[107px] w-[1080px] h-[267px]"
        alt=""
        src="/rectangle-28.svg"
      />
      <div className="absolute top-[429px] left-[177px] w-[174px] h-[77px] overflow-hidden">
        <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[4px] left-[0px] rounded-xl w-[174px] h-[68px]" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[22px] left-[17px] text-3xl font-bold font-inter text-white text-left inline-block w-[146px] h-[33px]"
          data-scroll-to="appointment"
        >
          Appointment
        </button>
      </div>
      <img
        className="absolute top-[109px] left-[921px] w-[489px] h-[536px] object-cover"
        alt=""
        src="/dr-demo-image@2x.png"
      />
      <div className="absolute top-[199px] left-[159px] w-[614px] h-[217px] overflow-hidden">
        <div className="absolute top-[11px] left-[21px] font-extrabold inline-block w-[569px] h-[130px]">
          Take best quality treatment for your child
        </div>
        <div className="absolute top-[155px] left-[23px] text-base tracking-[-0.03em] leading-[125%] inline-block w-[591px] h-[37px]">
          <p className="m-0">
            The art of medicine consists in amusing the patient while nature
            cures the disease. Treatment without prevention is simply
            unsustainable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
