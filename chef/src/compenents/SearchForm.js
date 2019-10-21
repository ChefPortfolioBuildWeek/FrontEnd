import React, { useState, useEffect } from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchForm({ displayedChefPost, setDisplayedChefPost, chefpost }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = displayedChefPost.filter(article =>
      chefpost.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    searchTerm.length === 0
      ? setDisplayedChefPost(chefpost)
      : setDisplayedChefPost(results);
  }, [searchTerm]);

  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={value => setSearchTerm(value)}
      />
    </div>
  );
}

export default SearchForm;
