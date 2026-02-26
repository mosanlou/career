
import { useState } from "react";
import { DUMMY_PRODUCTS } from "./dummy-products";
import ProductCard from "./components/ProductCard";
import VideoModal from "./components/VideoModal";


export default function App() {
  const [activeVideo, setActiveVideo] = useState(null);

  function handlePlay(video) {
    setActiveVideo(video);
  }
  function handleClose() {
    setActiveVideo(null);
  }

  return (
    <div id="shop">
      <h1>Career Exploration</h1>
      <h2>Help Job Seekers and Students Find Their Future</h2>
      <VideoModal videoSrc={activeVideo} onClose={handleClose} />

      <div id="products">
        {DUMMY_PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} onPlay={handlePlay} />
        ))}
      </div>
    </div>
  );
}
