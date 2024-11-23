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
import img from '../../images/film-poster-placeholder.png'

const PersonCard = ({ person }) => {

  return (
    <Card className="darkCard">
      <CardContent className="darkCard">
        <Typography variant="h6" component="p">
          <p>Name: {person.name},</p>
          <p>Known for department: {person.known_for_department ? person.known_for_department : "None Specified"},</p>
          <p>From: {person.place_of_birth ? person.place_of_birth : "None Specified"}</p>
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
        
      
    </Card>
  );
};

export default PersonCard;