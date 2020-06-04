import React, { useState, useContext } from "react";
// import { GithubContext } from "../../contexts/githubContext";
import { ProductContext } from "../context/context";
const Search = () => {
  const { SetSearchProducts } = useContext(ProductContext);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
    SetSearchProducts(text);
  };

  return (
    <form className='py-2'>
      <input
        type='text'
        name='titre'
        placeholder='Search Users...'
        value={text}
        onChange={onChange}
      />
    </form>
  );
};

export default Search;
