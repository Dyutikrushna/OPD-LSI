import TopReviews from "../components/TopReviews";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Herosection from "../components/Herosection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainPageLanding = () => {
  return (
    <div className="w-full relative bg-lightsteelblue h-[3150px] overflow-hidden lg:w-[1180px]">
      <TopReviews />
      <Services />
      <AboutUs />
      <section className="absolute top-[-1px] left-[0px] w-[1440px] h-[726px] overflow-hidden">
        <Herosection />
        <Navbar />
      </section>
      <Footer />
    </div>
  );
};

export default MainPageLanding;
