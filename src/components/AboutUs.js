const AboutUs = () => {
  return (
    <div className="absolute top-[725px] left-[0px] w-[1440px] h-[601px] text-center text-29xl text-mediumslateblue font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[580px] object-cover"
        alt=""
        src="/rectangle-35@2x.png"
      />
      <div className="absolute top-[65px] left-[20px] font-extrabold inline-block w-[512px] h-[70px]">
        About Us
      </div>
      <img
        className="absolute top-[95px] left-[402px] w-[1038px] h-[0.5px] object-contain bg-black"
        alt=""
      />
      <div className="absolute top-[128px] left-[246px] w-[1008px] h-[431px] text-left text-mini text-black">
        <div
          className="absolute top-[73px] left-[0px] tracking-[0.03em] leading-[120%] font-light inline-block w-[594px] h-[287px]"
          data-scroll-to="drTapasMohapatra"
        >
          <p className="[margin-block-start:0] [margin-block-end:23px] font-medium">
            Dr. Tapas Mohapatra is a Pediatrician and Neonatologist in Bapujee
            Nagar, Bhubaneswar and has an experience of 17 years in these
            fields. Dr. Tapas Mohapatra practices at JAGANNATH SEVA SADAN - JSS
            in Bapujee Nagar, Bhubaneswar and BABY CARE in Chandrasekharpur,
            Bhubaneswar. He completed MBBS from Utkal University, Orissa, India
            in 2004,DNB - Paediatrics from National Board Of Examination in 2012
            and Fellowship in Neonatology from Indian Academy of Padeitrics in
            2016.
          </p>
          <p className="m-0 font-medium">He is a member of Indian Medical Association (IMA),Indian Association of Pediatrician,Indian Association of Pediatric Surgeons and National Neonatology Forum (NNF). Some of the services provided by the doctor are: Adolescent Medicine,Viral Fever Treatment,Growth & Development Evaluation / Management,Typhoid Fever Treatment and Child Development Disease Treatment etc</p>
        </div>
        <div className="absolute top-[0px] left-[605px] w-[403px] h-[431px] overflow-hidden">
          <img
            className="absolute top-[56px] left-[56px] rounded-30xl w-[276px] h-[282px] object-cover"
            alt=""
            src="/abc-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
