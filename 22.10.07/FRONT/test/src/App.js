import { Routes, Route } from "react-router-dom";
import {Main, Shop} from './page'
import { Header } from "./component/index";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>

    </div>
  );
}

export default App;
