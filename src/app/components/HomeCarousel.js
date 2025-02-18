import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1, // Move only 1 slide at a time
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const products = [
    {
      id: 1,
      img: `/images/1.jpg`,
    },
    {
      id: 2,
      img: `/images/2.jpg`,
    },
    {
      id: 3,
      img: `/images/3.jpg`,
    },
    {
      id: 4,
      img: `/images/5.jpg`,
    },
    {
      id: 5,
      img: `/images/6.jpg`,
    },
  ];

  return (
    <div style={{ width: "90%", margin: "auto", paddingTop: "55px" }}>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ padding: "10px" }}
            className="carousel-img-container"
          >
            <a href="#" className={`carousel-link${product.id}`}>
              <img
                src={product.img}
                alt={`Product ${product.id}`}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
