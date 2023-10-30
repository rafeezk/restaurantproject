import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Detail from "./components/Detail";
import Menu from "./components/Menu";
import CountryList from "./components/CountryList";
import CategoryList from "./components/CategoryList";

function App() {

  return (
    <>
    <BrowserRouter basename="/restaurantproject/">
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/menu/" element={<Menu/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/category/:makanan" element={<CategoryList/>}/>
      <Route path="/area/:country" element={<CountryList/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;