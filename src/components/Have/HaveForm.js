import React from "react";

const HaveForm = () => {
  return (
    <>
      <h1>What do you have?</h1>
      <form action="#">
        <label forHtml="need">
          <b>tampons</b>
          <input type="number" placeholder="number of tampons" />
          <b>type</b>
          <select name="type" id="type">
            <option value="Light">Light</option>
            <option value="Regular">Regular</option>
            <option value="Super">Super</option>
            <option value="Super Plus">Super Plus</option>
          </select>
        </label>
        <br />
        <label for="pads">
          <b>pads</b>
          <input type="number" placeholder="number of pads" />
          <b>type</b>
          <select name="type" id="type">
            <option value="Light">Regular</option>
            <option value="Regular">Heavy</option>
          </select>
        </label>
        <br />
        <label for="zip">
          <b>zip code</b>
          <input name="zip" type="number" placeholder='e.g., "78758"' />
        </label>
      </form>
    </>
  );
};

export default HaveForm;
