import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
// import { useEffect } from "react";
import Gallery from "./Pages/Gallery/Gallery";
import PriceList from "./Pages/PriceList/PriceList";
import MasterPlan from "./Pages/MasterPlan/MasterPlan";
import FloorPlan from "./Pages/FloorPlan/FloorPlan";
import Location from "./Pages/Location/Location";
import SiteVisit from "./Pages/SiteVisit/SiteVisit";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";

function App() {

  const title = "Godrej 103  At Sector 103, Gurgaon"
  const description = "Godrej 103 At Sector 103, GurgaonExplore sale in Godrej 103 . Get Pricing, brochure, floor plan, location and photo gallery."

  // remove inspect and copy element
  //  useEffect(() => {
  //   const handleRightClick = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleSelect = (e) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   document.addEventListener('selectstart', handleSelect);
  //   document.addEventListener('contextmenu', handleRightClick);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleRightClick);
  //     document.removeEventListener('selectstart', handleSelect);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>  
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home title={title} descriptions={description} />} />
          <Route path="/gallery" exact element={<Gallery title={title} descriptions={description} />} />
          <Route path="/price-list" exact element={<PriceList title={title} descriptions={description} />} />
          <Route path="/master-plan" exact element={<MasterPlan title={title} descriptions={description} />} />
          <Route path="/floor-plans" exact element={<FloorPlan title={title} descriptions={description} />} />
          <Route path="/location" exact element={<Location title={title} descriptions={description} />} />
          <Route path="/site-visit" exact element={<SiteVisit title={title} descriptions={description} />} />
          <Route path="/disclaimer" exact element={<Disclaimer title={title} descriptions={description} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
