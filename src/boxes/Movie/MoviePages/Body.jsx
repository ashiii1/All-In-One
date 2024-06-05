
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TopNav from "../MovieComponents/TopNav";
//import Card from "../components/Card";
import { fetchMovies, getGenres } from "../store";
import SliderContainer from "../MovieComponents/SliderContainer";

const Body = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const movies = useSelector((state) => state.netflix.movies);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const moviesLoaded = movies.length > 0; // Check if movies are already loaded

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded && !moviesLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  }, [genresLoaded, moviesLoaded, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(movies);

  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          className="background-image"
          src="https://newsroompost.com/wp-content/uploads/2023/01/720603-pathaan-movie-review-webp-1500%C3%97900-.jpg" alt="hero im"
        />
        <div className="container">
          <div className="title">
            <h1>PATHAN</h1>
            <p>
            Indian special agent Pathaan must go on the adventure of his lifetime to save India from bioterrorism
            </p>
          </div>
         
          <div className="buttons">
            <button onClick={() => navigate("/player")} className="playBtn">
              Play
            </button>
            <button className="moreBtn">More</button>
          </div>
        </div>
      </div>
    
      <SliderContainer movies={movies} />
      
    </HeroContainer>
    
  );
};

const HeroContainer = styled.div`
.hero {
  position: relative;
  .background-image {
    filter: brightness(60%);
  }
  img {
    height: 70vh;
    width: 100%;
  }
  .container {
    position: absolute;
    bottom: 0.1rem;
    .title {
      h1 {
        margin-left: 2rem;
        text-transform: uppercase;
        font-size: 40px;
        background: -webkit-linear-gradient(#FFFFFF , rgb(255,255,255)) ;
        //background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        margin-bottom: -0px;
        width: 640px;
        margin-left: 2rem;
        font-family: "lexend Deca", sans-serif;
        color: white;
      }
    }
    .buttons {
      display: flex;
      margin: 2rem;
      gap: 2rem;
    }

    .playBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #23013f;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      cursor: pointer;
    }
    .moreBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: black;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: 0.1rem solid white;
      cursor: pointer;
    }
  }
}


  // .cards-container {
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: center;
  //   gap: 1rem;
  //   padding: 2rem;
  // }
`;

export default Body;
// // Body.jsx
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import TopNav from "../MovieComponents/TopNav";
// import { fetchMovies, getGenres } from "../store";
// import SliderContainer from "../MovieComponents/SliderContainer";

// const Body = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
  
//   const movies = useSelector((state) => state.netflix.movies);
//   const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
//   const moviesLoaded = movies.length > 0;

//   useEffect(() => {
//     dispatch(getGenres());
//   }, [dispatch]);

//   useEffect(() => {
//     if (genresLoaded && !moviesLoaded) {
//       dispatch(fetchMovies({ type: "all" }));
//     }
//   }, [genresLoaded, moviesLoaded, dispatch]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.pageYOffset !== 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <HeroContainer>
//       <div className="hero">
//         <TopNav isScrolled={isScrolled} />
//         <img
//           className="background-image"
//           src="https://newsroompost.com/wp-content/uploads/2023/01/720603-pathaan-movie-review-webp-1500%C3%97900-.jpg"
//           alt="hero"
//         />
//         <div className="container">
//           <div className="title">
//             <h1>PATHAN</h1>
//             <p>
//               Indian special agent Pathaan must go on the adventure of his lifetime to save India from bioterrorism
//             </p>
//           </div>
         
//           <div className="buttons">
//             <button onClick={() => navigate("/player")} className="playBtn">
//               Play
//             </button>
//             <button className="moreBtn">More</button>
//           </div>
//         </div>
//       </div>
    
//       <SliderContainer movies={movies} />
//     </HeroContainer>
//   );
// };

// const HeroContainer = styled.div`
//   .hero {
//     position: relative;
//     .background-image {
//       filter: brightness(60%);
//     }
//     img {
//       height: 70vh;
//       width: 100%;
//     }
//     .container {
//       position: absolute;
//       bottom: 0.1rem;
//       .title {
//         h1 {
//           margin-left: 2rem;
//           text-transform: uppercase;
//           font-size: 40px;
//           background: -webkit-linear-gradient(#FFFFFF , rgb(255,255,255)) ;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
//         p {
//           margin-bottom: -0px;
//           width: 640px;
//           margin-left: 2rem;
//           font-family: "lexend Deca", sans-serif;
//           color: white;
//         }
//       }
//       .buttons {
//         display: flex;
//         margin: 2rem;
//         gap: 2rem;
//       }

//       .playBtn {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         color: #23013f;
//         border-radius: 1rem;
//         font-size: 1.4rem;
//         gap: 1rem;
//         padding: 0.9rem;
//         padding-left: 2rem;
//         padding-right: 2.4rem;
//         border: none;
//         cursor: pointer;
//       }
//       .moreBtn {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         color: white;
//         background-color: black;
//         border-radius: 1rem;
//         font-size: 1.4rem;
//         gap: 1rem;
//         padding: 0.9rem;
//         padding-left: 2rem;
//         padding-right: 2.4rem;
//         border: 0.1rem solid white;
//         cursor: pointer;
//       }
//     }
//   }
// `;

// export default Body;
