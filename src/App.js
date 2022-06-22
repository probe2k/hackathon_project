import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import Register from "./Register";

function App() {
  const userState = useSelector(selectUser);
  const { user } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    //eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Register />
      ) : (
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
        
        </>
      )}
    </div>
  );
}

export default App;
