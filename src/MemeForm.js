import React, { useState } from "react";
// import uuid from "uuid/v4";

const INITIAL_STATE = { topText: "", bottomText: "", imgUrl: "" };
function MemeForm({ addMeme }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addMeme(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  return (
    <form className="MemeForm" onSubmit={handleSubmit}>
      <label htmlFor="topText">Top Text</label>
      <input
        id="topText"
        name="topText"
        value={formData.topText}
        onChange={handleChange}
      ></input>
      <label htmlFor="bottomText">Bottom Text</label>
      <input
        id="bottomText"
        name="bottomText"
        value={formData.bottomText}
        onChange={handleChange}
      ></input>
      <label htmlFor="imgUrl">Image Url</label>
      <input
        id="imgUrl"
        name="imgUrl"
        value={formData.imgUrl}
        onChange={handleChange}
      ></input>
      <button>Add Meme</button>
    </form>
  );
}

export default MemeForm;
