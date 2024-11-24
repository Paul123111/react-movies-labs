# Assignment 1 - ReactJS app.

Name: Paul Fitzgerald

## Overview.

This repository has my assignment 1 for Web App Development 2. It lets you view movies and actors by calling the TMDB API.

### Features.
 
+ There are more static endpoints, including trending, upcoming and now playing movies.
+ There is an original language attribute on movieDetails
+ Added movie recommendations to movieDetails (parameterised endpoint)
+ Added PersonScrollList to movieDetails
+ Added personPage to web app to view cast and crew of movies (parameterised endpoint)
+ There is extensive linking of pages, such as people to movies, and movies to people
+ There are some new css styles, some changing the layout of the elements, and others changing the colour of items.
+ Caching is done on all static endpoints and parameterised endpoints.
+ New filtering options are added to movies (filter by minimum rating)
+ New sorting options are added to movies (sort by popularity, name, rating, latest)
+ New searching options added to movies (search by overview)
+ New filtering options added to people (filter by gender)
+ New sorting options added to people (sort by popularity and name)
+ New searching options added to people (search by name)
+ Watchlist functionality added.
+ Responsive UI layout for most of the app, including css style to make person images scale with screen and force aspect ratio.
+ Some new material UI components are included, such as pagination, and an unused switch.
+ Full pagination functionality is implemented in the home page, trending, upcoming, now playing, and recommendations.
+ Full sign-in and sign-up application is implemented with firebase, and partial sign-out is implemented. Whether the user is logged in is tested in home page's console, but I ran out of time before I could properly implement this.

## Setup requirements.

You may need to run "npm install firebase" to get the firebase components. Otherwise, I don't think there any other unusual steps.

## API endpoints.

+ `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}` - finds upcoming movies, page is used for pagination.
+ `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}` - finds trending movies, page is used for pagination.
+ `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}` finds movies now playing in cinema, page is used for pagination.
+ `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}` finds movies similar to one the user was viewing (based on movie ID), page is used for pagination.
+ `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}` - finds cast and crew of movie for a particular movie ID.
+ `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}` - finds information about a specific person from the person ID.
+ `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}` - finds the movies this person ID has been featured in, either as cast or crew.
 
## Routing.

+ path="/movies/watchlist" - lets the user view their watchlist
+ path="/movies/upcoming" - lets the user view upcoming movies
+ path="/movies/trending/today" - lets the user view trending movies
+ path="/movies/now-playing" - lets the user view movies that are now playing
+ path="/movies/:id/recommendations" - shows the user similar movies to the movie they were looking at.
+ path="/person/:id" - shows the user information about a person, alongside the movies they were in, either as cast or crew.
+ path="/login" - allows the user to log in.
+ path="/signup" - allows the user to create an account. Has 6+ password length requirement.

Favourites and watchlist would require authentication, but I ran out of time due to internet issues.

## Independent learning (If relevant).

For Firebase, I used Youtube tutorials, the firebase documentation, and looking up error messages on Google to learn how to implement authentication. I didn't get to complete everything, but I did get the user sign-up and log-in done.

For pagination, I used the Youtube tutorials and the material UI pagination documentation for styling (found classes to override) and linking the pagination element to the TMDB API pages.

I also used the TMDB API documentation for a lot of the for the movies and people details.

Credits:

https://www.youtube.com/watch?v=WpIDez53SK4
https://firebase.google.com/docs/auth/web/password-auth
https://www.youtube.com/watch?v=VcsGDtpck6I