import React from "react";
import './artstore.css'; 

function ArtStore() {
  const storedata = [
    {
      id: 1,
      title: "Ambitious Girl",
      description: "a vibrant depiction of feminine strength and determination",
      price: 100,
      imageUrl: "https://littleart.club/wp-content/uploads/2023/03/Discover-the-7-Different-Types-of-Art-Drawing-and-Get-Creative-2-1024x768.jpg.webp",
    },
    {
      id: 2,
      title: "Masquerade Mosaic",
      description: "Six masks, myriad stories; a kaleidoscope of cultural richness.",
      price: 150,
      imageUrl: "https://thumbs.dreamstime.com/b/vibrant-chinese-opera-masks-display-colorful-intricate-exhibit-272156392.jpg",
    },
    {
      id: 3,
      title: "Visionary Voyager",
      description: "Bearded adventurer with goggles, embodying exploration's essence",
      price: 200,
      imageUrl: "https://i.insider.com/5b2d01ca5e48ec40008b4585?width=700",
    },
    {
      id: 4,
      title: "Chromatic Muse",
      description: "A girl's face, a palette of hues; an artistic celebration of vibrant diversity",
      price: 120,
      imageUrl: "https://media.mutualart.com/Images//2022_12/17/21/212206694/running-away-into-you--xxl--NAHZA.Jpeg",
    },
     {
      id: 5,
      title: "Radiant Confidence",
      description: "A confident girl, a canvas of colors; a radiant symbol of self-assuredness",
      price: 100,
      imageUrl: "https://littleart.club/wp-content/uploads/2023/06/Exploring-the-Fascinating-World-of-Art-Unveiling-the-Different-Types-of-Art-Styles-min.jpg",
    },
    {
      id: 6,
      title: "Brushstroke Surprise",
      description: "A shocked man, brush in hand; a moment captured in the chaos of creation",
      price: 150,
      imageUrl: "https://www.artst.org/wp-content/uploads/2021/06/The-Desperate-Man-Gustave-Courbet.jpg"
    },
    {
      id: 7,
      title: "Cardshop Cigars",
      description: "Two men, cards and cigars; a scene of casual camaraderie amidst swirling smoke",
      price: 200,
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/the-card-players-circa-1892-1896-found-in-the-collection-of-news-photo-1677011054.jpg",
    },
    {
      id: 8,
      title: "Tranquil Waters",
      description: "A serene lake, nature's canvas; a tranquil oasis of beauty and serenity",
      price: 120,
      imageUrl: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/7280/17056/36x24_40_83501.1434785755.1280.1280__70553.1506574143.jpg?c=2",
    },
  ];


  return (
    <section className="artStoreSection"> {/* Updated class name */}
       <h2 className="featured"><span className="change">Art </span>Store</h2>
      <div className="row">
        {storedata.map((store) => (
          <div className="col-md-3" key={store.id}>
            <div className="artworkContainer"> {/* Updated class name */}
              <img src={store.imageUrl} alt={store.title} />
              <div className="details">
                <h3 className="arttitle">{store.title}</h3>
                <p className="description">{store.description}</p>
                <p className="price">Price: ${store.price}</p>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArtStore;
