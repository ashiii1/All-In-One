// // import React from 'react';
// // import { Routes, Route , Navigate} from 'react-router-dom';
// // import LoginPage from './MoviePages/LoginPage.jsx';
// // import Player from './MoviePages/Player.jsx';
// // import TvShow from './MoviePages/TvShow.jsx';
// // import Body from './MoviePages/Body.jsx';
// // import MoviePage from './MoviePages/MoviePage.jsx';
// // import SignUpPage from './MoviePages/SignUpPage.jsx';

// // const MovieMain = () => {
// //   return (
// //     <Routes>
// //       <Route path="/movie/login" element={<LoginPage />} />
// //       <Route path="/movie/signup" element={<SignUpPage />} />
// //       <Route path="/movie/player" element={<Player />} />
// //       <Route path="/movie/tv" element={<TvShow />} />
// //       <Route path="/movie/home" element={<Body />} />
// //       <Route path="/movie/movie" element={<MoviePage />} />
// //       <Route path="/movie" element={<Navigate to="/movie/home" />} />

// //     </Routes>
// //   );
// // };

// // export default MovieMain;
// import React from 'react';
// import { Routes, Route , Navigate} from 'react-router-dom';
// import LoginPage from './MoviePages/LoginPage.jsx';
// import Player from './MoviePages/Player.jsx';
// import TvShow from './MoviePages/TvShow.jsx';
// import Body from './MoviePages/Body.jsx';
// import MoviePage from './MoviePages/MoviePage.jsx';
// import SignUpPage from './MoviePages/SignUpPage.jsx';

// const MovieMain = () => {
//   return (
//     <Routes>
//       <Route path="login" element={<LoginPage />} />
//       <Route path="signup" element={<SignUpPage />} />
//       <Route path="player" element={<Player />} />
//       <Route path="tv" element={<TvShow />} />
//       <Route path="home" element={<Body />} />
//       <Route path="movie" element={<MoviePage />} />
//       <Route path="/" element={<Navigate to="home" />} />
//     </Routes>
//   );
// };

// export default MovieMain;
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './MoviePages/LoginPage.jsx';
import Player from './MoviePages/Player.jsx';
import TvShow from './MoviePages/TvShow.jsx';
import Body from './MoviePages/Body.jsx';
import MoviePage from './MoviePages/MoviePage.jsx';
import SignUpPage from './MoviePages/SignUpPage.jsx';

const MovieMain = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="player" element={<Player />} />
      <Route path="tv" element={<TvShow />} />
      <Route path="home" element={<Body />} />
      <Route path="movie" element={<MoviePage />} />
      <Route path="/" element={<Navigate to="home" />} />
    </Routes>
  );
};

export default MovieMain;
