import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { useDoors } from '../context/DoorsContext';
import { useNavigate } from "react-router-dom"; 

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-stone-100 text-stone-400 border border-dashed border-stone-300">
        <ImageOff className="w-6 h-6" />
        <span className="text-[9px] font-mono uppercase tracking-widest">Photo Coming Soon</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      referrerPolicy="no-referrer"
      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
    />
  );
}

export default function Gallery() {
  const { doors } = useDoors();
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF9F6]">
      <div className="bg-gradient-to-r from-stone-950 via-[#0B132B] to-stone-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="inline-block text-[9px] uppercase font-display font-bold tracking-[0.25em] border border-sky-400 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-1.5">
            GALLERY
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white">
            Our Door Catalog in Pictures
          </h1>
          <p className="text-sky-300/80 text-xs font-mono uppercase tracking-widest">
            A visual look at our steel door range
          </p>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {doors.map((door) => (
              <div
              key={door.id}
              onClick={() => navigate(`/catalog/${door.id}`)}
              className="group relative aspect-[3/4] bg-stone-100 border border-stone-200 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <GalleryImage src={door.imageUrl} alt={door.name} />
                <div className="absolute inset-x-0 bottom-0 bg-stone-950/80 text-stone-100 px-2 py-1.5">
                  <p className="text-[9px] font-mono uppercase tracking-wider truncate">{door.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
