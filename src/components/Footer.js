import PoweredByLSIFooter from "./PoweredByLSIFooter";

const Footer = () => {
  return (
    <div className="absolute top-[2630px] left-[-2px] w-[1442px] h-[534px] overflow-hidden text-left text-mini text-black font-inter">
      <div className="absolute top-[13px] left-[0px] bg-gainsboro w-[1442px] h-[427px]" />
      <div className="absolute top-[0px] left-[20px] w-[1189px] h-[453px] overflow-hidden">
        <div className="absolute top-[49px] left-[117px] w-[316px] h-80 overflow-hidden">
          <div className="absolute top-[29.7px] left-[40.6px] text-xl [text-decoration:underline] font-medium inline-block w-[205.4px] h-[36.5px] [transform:_rotate(-0.19deg)] [transform-origin:0_0]">
            Registered Office
          </div>
          <div className="absolute top-[86px] left-[39px] inline-block w-[254px] h-[59px]">
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Chandrasekharpur, Bhubaneswar
            </p>
            <p className="m-0 whitespace-pre-wrap">
              S-2/11, Niladri Vihar, Landmark: Near Buddha Park, Bhubaneswar
            </p>
          </div>
          <div className="absolute top-[159px] left-[4px] text-center inline-block w-[284px] h-[26px]">
            Doctor Enquiry:080 6191 5021
          </div>
          <img
            className="absolute top-[207px] left-[34px] w-[51px] h-[46px] object-cover"
            alt=""
            src="/facebookremovebgpreview-1@2x.png"
          />
          <img
            className="absolute top-[206px] left-[84px] w-[52px] h-[49px] object-cover"
            alt=""
            src="/instagramremovebgpreview-1@2x.png"
          />
          <img
            className="absolute top-[206px] left-[134px] w-[50px] h-[45px] object-cover"
            alt=""
            src="/twitterremovebgpreview-1@2x.png"
          />
          <img
            className="absolute top-[204px] left-[188px] w-12 h-[45px] object-cover"
            alt=""
            src="/whatsappremovebgpreview-1@2x.png"
          />
        </div>
        <div className="absolute top-[49px] left-[563px] w-[234px] h-[263px] overflow-hidden">
          <div className="absolute top-[88px] left-[42px] inline-block w-[154px] h-[108px]">
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Clinic and Direction
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Treatment
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Our Dector
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">{`About Us `}</p>
          </div>
          <div className="absolute top-[31px] left-[42px] text-xl [text-decoration:underline] font-medium inline-block w-[137px] h-8">
            Know Us
          </div>
        </div>
        <div className="absolute top-[27px] left-[906px] w-[350px] h-[364px] overflow-hidden text-xl">
          <div className="absolute top-[42px] left-[86px] [text-decoration:underline] font-medium inline-block w-[125px] h-[39px]">
            Action
          </div>
          <div className="absolute top-[97px] left-[85px] text-mini inline-block w-[198px] h-[247px]">
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Contact Us
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Book an Appointment
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Pay Online
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Feedback
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Video consulation
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              COVID care Packages
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Blogs
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Medicine Information
            </p>
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              Symptomes
            </p>
            <p className="m-0">Health Guide</p>
          </div>
        </div>
      </div>
      <PoweredByLSIFooter />
    </div>
  );
};

export default Footer;
