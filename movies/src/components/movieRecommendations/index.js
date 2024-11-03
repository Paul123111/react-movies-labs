import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import LanguageIcon from '@mui/icons-material/Language';
import Button from "@mui/material/Button";
import PageTemplate from '../templateMovieListPage/index.js';
import AddToFavoritesIcon from '../cardIcons/addToFavorites'

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieRecommendations = ({ recommendations }) => {  // Don't miss this!

  const movies = recommendations.results

  return (
    // <>
    //   <Typography variant="h5" component="h3">
    //     Overview
    //   </Typography>

    //   <Paper 
    //     component="ul" 
    //     sx={{...root}}
    //   >

    //     <li>{recommendations.results[0].title}</li>

    //   </Paper>
        
    //   </>


    <PageTemplate
      title="Recommended Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />

  );
};
export default MovieRecommendations;