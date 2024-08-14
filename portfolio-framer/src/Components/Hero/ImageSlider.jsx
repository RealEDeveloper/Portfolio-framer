import React, { useState, useEffect } from 'react';

// Import images from the assets folder
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.svg';
import image3 from '../../assets/image3.png';

const ImageSlider = () => {
  // Array of imported image URLs
  const images = [
    image2,
    image3
    // Add more images as needed
  ];

  // State to hold the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to update the image index
    const updateImageIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set interval to update the image index every 5 seconds
    const intervalId = setInterval(updateImageIndex, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
      <img src={images[currentIndex]} alt="Slider" style={{ width: '550px', height: '700px' }} />
    </div>
  );
};

export default ImageSlider;
