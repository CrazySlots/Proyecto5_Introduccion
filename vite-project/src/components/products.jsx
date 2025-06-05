import { useRef } from 'react';
import './products.css';

import img1 from "../assets/bota1.png";
import img2 from "../assets/bota2.png";
import img3 from "../assets/bota3.png";
import img4 from "../assets/bota4.png";
import img5 from "../assets/bota5.png";

export default function Carousel() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
    const imagesBoots=[img1,img2,img3,img4,img5];

  return (
    <div className="carousel-wrapper">
      <button className="scroll-btn left" onClick={() => scroll('left')}>‹</button>

      <div className="carousel" ref={carouselRef}>
        {imagesBoots.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`Kitten ${index}`} />
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll('right')}>›</button>
    </div>
  );
}
