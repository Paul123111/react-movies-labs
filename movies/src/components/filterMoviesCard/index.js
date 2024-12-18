import React, { useState, useEffect } from "react"; 
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function FilterMoviesCard(props) {

  const { data, error, isLoading, isError } = useQuery("genres", getGenres);
  //const {movies, error2, isLoading2, isError2} = useQuery("m")

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleMinRatingChange = (e, props) => {
    handleChange(e, "ratings", e.target.value);
  };

  const handleSortChange = (e) => {
    handleChange(e, "sort", e.target.value);
  };

  const handleOverviewChange = (e, props) => {
    handleChange(e, "overview", e.target.value);
  };

  return (
    <Card 
      sx={{
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
            sx={{...formControl}}
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
            value={props.titleFilter}
            onChange={handleTextChange}
        />
        <FormControl sx={{...formControl}}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl sx={{...formControl}}>
          <InputLabel id="min-ratings-label"></InputLabel>
          <TextField
            //labelId="min-ratings-label"
            id="min-ratings-select"
            helperText="Min Rating"
            value={props.ratingsFilter}
            onChange={handleMinRatingChange}
          >
            
          </TextField>
        </FormControl>

        {/* <FormControl sx={{...formControl}}>
          <InputLabel id="max-ratings-label"></InputLabel>
          <TextField
            labelId="max-ratings-label"
            id="max-ratings-select"
            defaultValue="0"
            helperText="Max Rating"
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
          </TextField>
        </FormControl> */}

        <FormControl sx={{...formControl}}>
          <InputLabel id="sort-label">Sort By</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            defaultValue=""
            value={props.sortBy}
            onChange={handleSortChange}
          >
            <MenuItem key="popularity" value="popularity">
              Popularity
            </MenuItem>
            <MenuItem key="nameAZ" value="nameAZ">
              Name (A-Z)
            </MenuItem>
            <MenuItem key="nameZA" value="nameZA">
              Name (Z-A)
            </MenuItem>
            <MenuItem key="ratings" value="ratings">
              Highest Rating
            </MenuItem>
            <MenuItem key="releaseDate" value="releaseDate">
              Latest Movies
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
            sx={{...formControl}}
            id="overview-search"
            label="Search overview"
            type="search"
            variant="filled"
            value={props.overviewFilter}
            onChange={handleOverviewChange}
        />

      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}

// autocomplete maybe
// for searching, use actors beginning with t in movies for example (typing into searchbar) - put this into movie details
// for responive UI, just make sure new features use responsive UI (labs do by default)
// leave components that arent working in for extra marks