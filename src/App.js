import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Doctors from "./components/Doctors/Doctors";
import Hospitals from "./components/Hospitals/Hospitals";
import Treatments from "./components/Treatments/Treatments";
import DoctorDetails from "./components/Doctors/DoctorDetails";
import HospitalDetails from "./components/Hospitals/HospitalDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="hospitals" element={<Hospitals />} />
          <Route path="treatments" element={<Treatments />} />

          <Route path="doctorDetails" element={<DoctorDetails />} />
          <Route path="hospitalDetails" element={<HospitalDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
