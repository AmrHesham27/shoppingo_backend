import CoverCarousel from "../../../../components/UI/CoverCarousel/CoverCarousel";
import image1 from "../../../../assets/images/CoverCarousel/s_1.webp";
import image2 from "../../../../assets/images/CoverCarousel/s_2.webp";
import image3 from "../../../../assets/images/CoverCarousel/s_3.webp";

function HeroCarousel() {
  const itemsInfo = [
    {
      h3: "New Arraival",
      h1: "Women Fashion",
      p: "Last call for up to 25%",
      img: image1,
      bg: "bg-primary",
    },
    {
      h3: "Latest Trending",
      h1: "Men Fashion",
      p: "Last call for up to 35%",
      img: image2,
      bg: "bg-red",
    },
    {
      h3: "New Trending",
      h1: "Kids Fashion",
      p: "Last call for up to 15%",
      img: image3,
      bg: "bg-purple",
    },
  ];

  return <CoverCarousel itemsInfo={itemsInfo} />;
}

export default HeroCarousel;
