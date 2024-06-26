import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
