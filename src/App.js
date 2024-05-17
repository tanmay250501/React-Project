
import './App.css';
import Header from "./MyComponent/Header";
import {ToodosList} from "./MyComponent/ToodosList";
import {Footer} from "./MyComponent/Footer";

function App() {


  return (
    
    <>
    <Header title = "My To Do List" />
    <ToodosList/>
    <Footer/>
    </>
  );
}

export default App;


