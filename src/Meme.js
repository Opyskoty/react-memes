import React from "react";

function Meme({ id, topText, bottomText, imgUrl, removeMeme }) {
  const deleteMeme = () => {
    removeMeme(id);
  }
  return (
    <div className="Meme">
      <div className="topText">{topText}</div>
      <img src={imgUrl} alt="no meme available"></img>
      <div className="bottomText">{bottomText}</div>
      <button onClick={deleteMeme}>Delete</button>
    </div>
  );
}

export default Meme;
