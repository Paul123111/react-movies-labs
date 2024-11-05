// todo for person
// 1. get credits for movie - DONE
// 2. get movie to list credits - DONE
// 3. get movie to link people to personPage - DONE
// 4. create personPage

import { Typography } from "@mui/material";
import React from "react";

const PersonDetails = ({ person }) => {

  return (
    <Typography variant="h6" component="p">
      <p>Name: {person.name}</p>
      {person.also_known_as.length > 0 ? <p>Also known as: {person.also_known_as.map(g => (<>{g}, </>))}</p> : <></>}
      <p>Biography: {person.biography ? person.biography : "None Specified"}</p>
      <p>Date of Birth: {person.birthday ? person.birthday : "None Specified"}</p>
      <p>Died on: {person.deathday ? person.deathday : "Currently Alive"}</p>
      <p>Gender: {person.gender == 0 ? "Unspecified" : person.gender == 1 ? "Female" : person.gender == 2 ? "Male" : "Non-Binary"}</p>
      <p>Homepage: {person.homepage ? person.homepage : "None Specified"}</p>
      <p>Known for department: {person.known_for_department ? person.known_for_department : "None Specified"}</p>
      <p>Born in: {person.place_of_birth ? person.place_of_birth : "None Specified"}</p>
      <p>Popularity: {person.popularity} followers</p>
    </Typography>
  );
};

export default PersonDetails;