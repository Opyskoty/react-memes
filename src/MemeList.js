import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MemeForm from "./MemeForm";
import Meme from "./Meme";

function MemeList() {
  const memes = useSelector((store) => store.memes);
  const dispatch = useDispatch();

  const addMeme = (data) => dispatch({ type: "ADD", payload: data });
  const removeMeme = (imgUrl) => dispatch({ type: "REMOVE", payload: imgUrl });

  return (
    <div className="MemeList">
      <MemeForm addMeme={addMeme} />
      <ul>
        {memes.map((m) => (
          <li key={m.id}>
            <Meme {...m} removeMeme={removeMeme} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemeList;
