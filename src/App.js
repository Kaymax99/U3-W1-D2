import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
/* import AllTheBooks from "./components/AllTheBooks"; */
import MyFooter from "./components/MyFooter.jsx";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList />
      <MyFooter />
    </>
  );
}

export default App;
