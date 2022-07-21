import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About"
import Space from "./pages/Space"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import FAQ from "./pages/FAQ"
import Booking from "./pages/Booking"

export default function App() {
 return (
 <BrowserRouter>
    <Routes>
        
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="therapeutic-space" element={<Space />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="booking" element={<Booking />} />
        </Route>
    </Routes>
 </BrowserRouter>
 );
}

ReactDOM.render(<App />, document.getElementById("root"));