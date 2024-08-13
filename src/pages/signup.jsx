
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8081/api/users/signup', {
//         email,
//         password,
//         confirmPassword
//       });

//       console.log(response.data);

//       if (response.status === 200) {
//         setError('Signup successful');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//       } else {
//         setError(response.data.message || 'Signup Success');
//       }
//     } catch (error) {
//       console.error(error);
//       setError('An error occurred during signup');
//     }
//   };

//   return (
//     <section className="login-wrapper p-5">
//       <div className="container-xxl">
//         <div className="row justify-content-center">
//           <div className="col-lg-4 col-md-8 col-sm-10">
//             <div className="card">
//               <div className="card-body p-5">
//                 <h2 className="text-center">Sign Up</h2>
//                 <p className="text-center mb-3">Join us in shopping!!</p>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label mb-3">
//                       Enter Your Email address
//                     </label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       placeholder="enter email here ..."
//                       value={email}
//                       onChange={(event) => setEmail(event.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="password" className="form-label mb-3">
//                       Enter Your password
//                     </label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="password"
//                       placeholder="enter password here..."
//                       value={password}
//                       onChange={(event) => setPassword(event.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label
//                       htmlFor="confirmPassword"
//                       className="form-label mb-3"
//                     >
//                       Confirm Your password
//                     </label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="confirmPassword"
//                       placeholder="rewrite password here..."
//                       value={confirmPassword}
//                       onChange={(event) =>
//                         setConfirmPassword(event.target.value)
//                       }
//                       required
//                     />
//                   </div>
//                   {error && (
//                     <div className="alert alert-danger">{error}</div>
//                   )}
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <p>
//                       Have an account?
//                     </p>
//                     <Link to="/login" className="form-link">
//                       Log In
//                     </Link>
//                   </div>
//                   <div className="d-grid gap-2">
//                     <button type="submit">Sign Up</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signup;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/signup', {
        email,
        password,
      });

      console.log(response.data);

      if (response.status === 200) {
        setError('Signup successful');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setError(response.data.message || 'Signup failed');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred during signup');
    }
  };

  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-center">Sign Up</h2>
                <p className="text-center mb-3">Join us in shopping!!</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label mb-3">
                      Enter Your Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="enter email here ..."
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label mb-3">
                      Enter Your password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="enter password here..."
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="confirmPassword"
                      className="form-label mb-3"
                    >
                      Confirm Your password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="rewrite password here..."
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      required
                    />
                  </div>
                  {error && (
                    <div className="alert alert-danger">{error}</div>
                  )}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p>
                      Have an account?
                    </p>
                    <Link to="/login" className="form-link">
                      Log In
                    </Link>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

