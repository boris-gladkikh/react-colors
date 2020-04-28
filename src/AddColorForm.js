import React from 'react';
import {Link} from "react-router-dom";

function AddColorForm(){
  return (
    <form>
      <label htmlFor="colorName">Color Name:</label>
      <input type="text" name="colorName"></input>
      <label htmlFor="colorValue">Color Value:</label>
      <input name="colorValue" type="color"></input>
      <button type="submit">Add Color!</button>
    </form>
  )

}

export default AddColorForm