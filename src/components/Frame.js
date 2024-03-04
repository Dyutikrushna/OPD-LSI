const Frame = () => {
  return (
    <div className="w-[456px] relative rounded-[37px] bg-lightgray h-[301px] overflow-hidden max-w-full max-h-full text-left text-mini text-black font-inter">
      <div className="absolute top-[51px] left-[45px] w-[380px] h-[110px] overflow-hidden">
        <div className="absolute top-[19px] left-[35px] font-semibold inline-block w-[89px] h-[21px]">
          Username
        </div>
        <input
          className="[border:none] [outline:none] bg-white absolute top-[17px] left-[130px] w-[204px] h-[23px]"
          placeholder="username"
          type="text"
        />
        <input
          className="[border:none] [outline:none] bg-white absolute top-[62px] left-[130px] w-[204px] h-[23px]"
          placeholder="Password"
          type="text"
        />
        <div className="absolute top-[63px] left-[35px] font-semibold inline-block w-[89px] h-[21px]">
          Password
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-lightgreen absolute top-[187px] left-[131px] rounded-3xl w-[185px] h-[55px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[201px] left-[calc(50%_-_58px)] text-5xl font-semibold font-inter text-black text-center inline-block w-[113px] h-[18px]">
        LOGIN
      </button>
    </div>
  );
};

export default Frame;
