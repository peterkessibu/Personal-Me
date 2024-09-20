'use client';
import Image from 'next/image';

const Gallery = () => {
  // Combined images array
  const images = [
    '/images/pic1.jpg',
    '/images/pic2.jpg',
    '/images/pic3.jpg',
    '/images/reading.png',
    '/images/coding.png',
    '/images/hiking.png',
  ];

  return (
    <section id="gallery" className="p-10 bg-white w-full max-w-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery & Hobbies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
