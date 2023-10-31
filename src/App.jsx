import Navbar from "./components/Navbar";
import { Routes , Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Shop from "./pages/Shop";

function App(){

  return (
    <Container>
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Shop/>}></Route>
     </Routes>
    </Container>
  )

}

export default App;