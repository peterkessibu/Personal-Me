"use client";
import Image from "next/image";

const Gallery = () => {
  // Combined images array
  const images = [
    "/images/Gallery/me_image_1.jpg",
    "/images/Gallery/me_image_2.jpg",
    "/images/Gallery/me_image_3.jpg",
  ];

  return (
    <div id="gallery" className="p-10 bg-white w-full max-w-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            width={400} // Set the width
            height={0} // Remove fixed height
            className="object-contain w-full h-auto rounded-b-xl" // Maintain the aspect ratio
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
