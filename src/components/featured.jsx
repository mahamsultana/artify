import React from "react";
import './featured.css'

function Featured() {
    const artworks = [
  {
    id: 1,
    title: "Rainy Reverie",
    artist: "Hurry Cane",
    description: "A girl amidst vibrant colors, embraced by gentle rain",
    image: "https://iso.500px.com/wp-content/uploads/2016/05/stock-photo-136664977.jpg"
  },
   {
    id: 2,
    title: "Radiant Grace",
    artist: "Aurora Blake",
    description: "A girl's captivating beauty",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmByh2FC3LMqabMX0hqFHnPsGY0m_fQ0YZqh1gYkx1KQ&s"
  },
   {
    id: 3,
    title: "Vivid Beauty",
    artist: "Aria Palette",
    description: "A colorful portrayal of a girl exuding radiant charm and allure",
    image: "https://srv-1.eden-gallery.com/2021/11/23/619ce8f6d5d2c-WhatsApp-Image-20211109-at-17-33-31.jpeg"
  },
   {
    id: 4,
    title: "Radiant Assurance",
    artist: "Stefan Salvatore",
    description: "A vibrant portrayal of a girl exuding confidence and individuality.",
    image: "https://i.pinimg.com/236x/24/41/ca/2441ca68686fd2d8b22d5da3e3a7120c.jpg"
  },
   {
    id: 5,
    title: "Chromatic Canvas",
    artist: "Elena Gilbert",
    description: "A colorful and dynamic backdrop exuding vibrancy and creativity",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgr6cGt_NNaxr2BP0NF9l9Hk0P7TfxOQ5G-9LAisJ4EA&s"
  },
   {
    id: 6,
    title: "Spectrum Portrait",
    artist: "Klaus Mikaelson",
    description: "A face adorned with a spectrum of colors, capturing diversity and individuality",
    image: "https://www.studentartguide.com/wp-content/uploads/2022/02/top-in-nz-cambridge.jpg"
  },
   {
    id: 7,
    title: "Innocent Embrace",
    artist: "Davina Claire",
    description: "A baby tenderly holds a cloth, radiating innocence and purity",
    image: "https://i.tribune.com.pk/media/images/977784-DSC_copy-1445535092/977784-DSC_copy-1445535092.jpg"
  },
   {
    id: 8,
    title: "Ethereal Portrait",
    artist: "Lucien Castle",
    description: "A beautiful painting of a girl exuding grace and enchantment",
    image: "https://ampersandart.com/files/content/blog/blog_2022/10_Vic%20Hollins/1Aquabord_WatercolorMixedMedia_sm.jpg"
  },
];
    return(
      <div className="new"> <section className="featured-arts">
          <h2 className="featured"><span className="change">Featured </span>Arts</h2>
      <div className="artworks">
        {artworks.map((artwork) => (
          <div className="artwork" key={artwork.id}>
            <img src={artwork.image} alt={artwork.title} />
            <div className="info">
              <h4>{artwork.title}</h4>
              <h3>Artist: {artwork.artist}</h3>
              <p>{artwork.description}</p>
              <a href="#">Explore Artist</a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div> 
    );
}


export default  Featured;