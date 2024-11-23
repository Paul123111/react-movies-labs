// todo for person
// 1. get credits for movie - DONE
// 2. get movie to list credits - DONE
// 3. get movie to link people to personPage - DONE
// 4. create personPage - partially done, implement image
// 5. add movie credits to person
// 6. link movie credits to movie

import { Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import img from '../../images/blank-profile-picture.png';
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";

const PersonDetails = ({ person, credits }) => {

  const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

  return (
    <Card className="darkCard">
      <CardContent className="darkCard">
        <Typography variant="h6" component="p">
          <p>Name: {person.name}</p>
          {person.also_known_as.length > 0 ? <p>Also known as: {person.also_known_as.map(g => (<>{g}, </>))}</p> : <></>}
          <p>Biography: {person.biography ? person.biography : "None Specified"}</p>
          <p>Date of Birth: {person.birthday ? person.birthday : "None Specified"}</p>
          <p>Died on: {person.deathday ? person.deathday : "Currently Alive"}</p>
          <p>Gender: {person.gender === 0 ? "Unspecified" : person.gender === 1 ? "Female" : person.gender === 2 ? "Male" : "Non-Binary"}</p>
          <p>Homepage: {person.homepage ? person.homepage : "None Specified"}</p>
          <p>Known for department: {person.known_for_department ? person.known_for_department : "None Specified"}</p>
          <p>Born in: {person.place_of_birth ? person.place_of_birth : "None Specified"}</p>
          <p>Popularity: {person.popularity}</p>
          </Typography>
        </CardContent>
        
        <CardMedia className="darkCard"
        sx={{ height: 500 }}
        image={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
            : img
        }
        />

      <CardContent className="darkCard">
        <Typography variant="h6" component="p">
        {credits.cast.map((g) => (
          <li key={g.name}>
            <Link to={`/movies/${g.id}`}>
              <Chip label={g.title} sx={{...chip}} />
            </Link>
          </li>
        ))}
          </Typography>
        </CardContent>
        
      
    </Card>
  );
};

export default PersonDetails;