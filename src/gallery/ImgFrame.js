import React, { useState } from "react";

function ImgFrame({ src, h, author }) {
  const [show, setShow] = useState(0);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
  const numbb = getRandomInt(250, 450);
  console.log("loggg", numbb);

  return (
    <div
      className={"imgframe " + (show ? "pop" : "")}
      style={{ height: numbb }}
    >
      <img
        alt="img"
        className={show ? "mainimgpop" : "mainimg"}
        src={src}
        height={numbb}
      />
      <span className={show ? "show" : "close"} onClick={() => setShow(0)}>
        X
      </span>
      <div className="actions">
        <button
          className={show ? "hide" : ""}
          onClick={() => setShow(show ? 0 : 1)}
        >
          Show bigger
        </button>
        <div className={show ? "" : "hide"}>Autor foto:"{author}"</div>
        <button  onClick={() => (window.location = src)}>
          Real size
        </button>
      </div>
    </div>
  );
}

export default ImgFrame;
