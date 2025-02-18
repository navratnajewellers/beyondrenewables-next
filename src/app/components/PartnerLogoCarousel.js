import Marquee from "react-fast-marquee";

const PartnerLogoCarousel = () => {
  const images = [
    `/images/logo1.png`,
    `/images/logo3.png`,
    `/images/logo1.png`,
    `/images/logo3.png`,
    `/images/logo1.png`,
    `/images/logo3.png`,
    `/images/logo1.png`,
    `/images/logo3.png`,
  ];

  return (
    <Marquee speed={50} pauseOnHover={true} gradient={false}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Logo ${index}`}
          style={{ marginRight: 20 }}
        />
      ))}
    </Marquee>
  );
};

export default PartnerLogoCarousel;
