import React from "react";
import ImgFrame from "./ImgFrame";

function Column({ images }) {
  return (
    <div className="column">
      {images.map((img, i) => {
        return (
          <ImgFrame
            key={i}
            src={img.download_url}
            h={img.height}
            author={img.author}
          />
        );
      })}
    </div>
  );
}

export default Column;
