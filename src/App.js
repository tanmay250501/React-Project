
import './App.css';
import Header from "./MyComponent/Header";
import {ToodosList} from "./MyComponent/ToodosList";
import {Footer} from "./MyComponent/Footer";

function App() {

  let my = 345;
  return (
    
    <>
    <Header></Header>
    <ToodosList></ToodosList>
    <Footer></Footer>
    </>
  );
}

export default App;

