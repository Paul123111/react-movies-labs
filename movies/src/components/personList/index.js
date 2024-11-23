import React from "react";
import Person from "../personCard/";
import Grid from "@mui/material/Grid2";

const PersonList = (props) => {
  let personCards = props.people.map((m) => (
    //<Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
    <ul>
      <li className="horizontalScroll"><Person key={m.id} person={m} className="personCard" /> </li>
    </ul>
  ));
  return personCards;
};

export default PersonList;