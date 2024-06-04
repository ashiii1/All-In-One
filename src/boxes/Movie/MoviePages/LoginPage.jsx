// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { firebaseAuth } from '../utils/firebase-config';
// import BackgroundImage from '../MovieComponents/BackgroundImage';
// import Header from '../MovieComponents/Header';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
//       if (currentUser) {
//         navigate('/movie/home'); // Corrected the path to match your route setup
//       }
//     });
//     return () => unsubscribe();
//   }, [navigate]);

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(firebaseAuth, email, password);
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <Wrapper>
//       <BackgroundImage />
//       <div className="loginContent">
//         <Header />
//         <div className="form-wrapper">
//           <div className="form">
//             <div className="title">
//               <h1>Login</h1>
//             </div>
//             <div className="container">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button onClick={handleLogin}>Login</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   position: relative;
//   .loginContent {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100vh;
//     width: 100vw;
//     display: grid;
//     grid-template-columns: 1fr;
//     .form-wrapper {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       height: 100%;
//       gap: 2rem;
//     }
//     .form {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       background-color: rgba(0, 0, 0, 0.7);
//       padding: 2rem;
//       border-radius: 0.5rem;
//       color: white;
//       .title {
//         margin-bottom: 2rem;
//       }
//       .container {
//         display: flex;
//         flex-direction: column;
//         gap: 1rem;
//         input {
//           padding: 0.5rem 1rem;
//           border-radius: 0.5rem;
//           border: 1px solid #ccc;
//           width: 20rem;
//           outline: none;
//         }
//         button {
//           padding: 0.5rem 1rem;
//           background-color: #23013f;
//           color: white;
//           border: none;
//           border-radius: 0.5rem;
//           cursor: pointer;
//           font-weight: bold;
//           font-size: 1rem;
//           transition: background-color 0.3s ease;
//           &:hover {
//             background-color: #3b0a54;
//           }
//         }
//       }
//     }
//   }
// `;

// export default LoginPage;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utils/firebase-config';
import BackgroundImage from '../MovieComponents/BackgroundImage';
import Header from '../MovieComponents/Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        navigate('/movie/home');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Wrapper>
      <BackgroundImage />
      <div className="loginContent">
        <Header />
        <div className="form-wrapper">
          <div className="form">
            <div className="title">
              <h1>Login</h1>
            </div>
            <div className="container">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .loginContent {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      gap: 2rem;
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 2rem;
      border-radius: 0.5rem;
      color: white;
      .title {
        margin-bottom: 2rem;
      }
      .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #ccc;
          width: 20rem;
          outline: none;
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #23013f;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: bold;
          font-size: 1rem;
          transition: background-color 0.3s ease;
          &:hover {
            background-color: #3b0a54;
          }
        }
      }
    }
  }
`;

export default LoginPage;
