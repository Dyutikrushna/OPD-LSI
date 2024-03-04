import { useState, useCallback } from "react";
import Frame from "./Frame";
import PortalPopup from "./PortalPopup";

const Navbar = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const onHomeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='appointment']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='drTapasMohapatra']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="absolute top-[0px] left-[0px] shadow-[0px_-28px_83.6px_#343434] w-[1440px] h-[82px] overflow-hidden text-left text-mini text-black font-inter">
        <div className="absolute top-[0px] left-[0px] bg-cornflowerblue w-[1440px] h-[110px]" />
        <div className="absolute top-[6px] left-[846px] w-[564px] h-[76px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[27px] left-[0px] text-base font-extrabold font-inter text-black text-left inline-block w-[50px]"
            onClick={onHomeClick}
          >
            Home
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[27px] left-[88px] text-base font-extrabold font-inter text-black text-left inline-block w-[79px] h-5"
            onClick={onAboutUsClick}
          >
            About Us
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[27px] left-[290px] text-base font-extrabold font-inter text-black text-left inline-block w-[70px] h-5">
            Contact
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[27px] left-[191px] text-base font-extrabold font-inter text-black text-left inline-block w-[71px] h-5"
            onClick={onServicesClick}
          >
            Services
          </button>
          <div
            className="absolute top-[0px] left-[385px] w-[179px] h-[76px] overflow-hidden cursor-pointer"
            onClick={openFrame}
          >
            <button className="cursor-pointer [border:none] p-0 bg-lightgreen absolute top-[15px] left-[0px] rounded-xl w-[143px] h-[41px]" />
            <b className="absolute top-[27px] left-[46px] inline-block w-[167px] h-[23px]">
              LOGIN
            </b>
          </div>
        </div>
        <div className="absolute top-[3px] left-[66px] w-[249px] h-[63px] overflow-hidden text-21xl font-love-ya-like-a-sister">
          <div className="absolute top-[15px] left-[29px] whitespace-pre-wrap inline-block w-[209px] h-12">
            Baby   Care
          </div>
          <img
            className="absolute top-[14px] left-[102px] w-[55.2px] h-[54px] object-contain"
            alt=""
            src="/rectangle-30@2x.png"
            data-scroll-to="rectangleImage"
          />
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Navbar;
