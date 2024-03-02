import React from "react";
import './testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Klaus Mikaelson",
      comment: "Artify uplifts my art. Appreciative of the opportunity",
      rating: 5,
      profileImage: "https://i.pinimg.com/736x/ac/32/3a/ac323a51c57edc474927a850a58a7dab.jpg"
    },
    {
      id: 2,
      name: "Lucien Castle",
      comment: "Artify empowers artists like me. Grateful for the opportunity",
      rating: 4,
      profileImage: "https://i.pinimg.com/474x/5c/4a/55/5c4a555f59b12bc5ac25f22154af14f9.jpg"
    },
    {
      id: 3,
      name: "Stefan Salvatore",
      comment: "Artify showcases my work globally. Grateful for the platform.",
      rating: 5,
      profileImage: "https://i.pinimg.com/originals/2a/fe/76/2afe76e404d1f2a4998cbf33b4d7e5cd.jpg"
    },
     {
      id: 4,
      name: "Landon  Yee",
      comment: "Great opportunity for artists to show their arts",
      rating: 5,
      profileImage: "https://tv-fanatic-res.cloudinary.com/iu/s--FaSUlEUs--/t_xlarge_p/cs_srgb,d_tv-fanatic-placeholder-square.png,f_auto,fl_strip_profile.lossy,q_auto:420/v1575638479/landon-on-the-run-legacies-s2e8.png"
    },
      {
      id: 5,
      name: "Aurora  Borealis",
      comment: "This website policies are fair. Appreciative of the transparency.",
      rating: 5,
      profileImage: "https://w0.peakpx.com/wallpaper/335/56/HD-wallpaper-hope-mikaelson-hayley-hope-hope-mikaelson-klaus-legacies-love-mikaelson-the-originals-the-vampire-diaries-thevampirediaries.jpg"
    },
      {
      id: 6,
      name: "Hania Amir",
      comment: "Artify's team is dedicated. Appreciative of their efforts",
      rating: 5,
      profileImage: "https://hamariweb.com/profiles/images/profile/4920-834.jpg"
    },
     {
      id: 7,
      name: "Noor Khan",
      comment: "Artify's interface is user-friendly. Appreciative of the accessibility",
      rating: 5,
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8IHbDwzi-P7hU4CtT2P6tne7Kwj0aO3iPm48VwkrTw&s"
    },
  ];

  return (
    <section className="testimonialsSection">
      <h2 className="featured"><span className="change">Testimonials</span></h2>
      <div className="testimonialsContainer">
        {testimonials.map((testimonial) => (
          <div className="testimonialCard" key={testimonial.id}>
            <img src={testimonial.profileImage} alt={testimonial.name} className="profilePic" />
            <p className="testimonialText">"{testimonial.comment}"</p>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, index) => (
                <span key={index} role="img" aria-label="star">&#11088;</span>
              ))}
            </div>
            <p className="testimonialName">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
