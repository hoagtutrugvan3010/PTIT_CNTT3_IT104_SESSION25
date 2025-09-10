import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bai1
import Home1 from "./Bai1.tsx/Home";
import About1 from "./Bai1.tsx/About";
import Contact1 from "./Bai1.tsx/Contact";

// Bai2
import Contact2 from "./PTIT-CNTT3-IT104-Session25-Bai2/Contact";

// Bai3
import Login from "./PTIT-CNTT3-IT104-Session25-Bai3/Login";

// Bai4
import Register from "./PTIT-CNTT3-IT104-Session25-Bai4/Register";

// Bai5
import NotFound from "./PTIT-CNTT3-IT104-Session25-Bai5/NotFound";

// Bai6
import Home6 from "./PTIT-CNTT3-IT104-Session25-Bai6/Home";
import Detail from "./PTIT-CNTT3-IT104-Session25-Bai6/Detail";
import Product from "./PTIT-CNTT3-IT104-Session25-Bai6/Product";
import Header from "./PTIT-CNTT3-IT104-Session25-Bai6/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Bai1 */}
        <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/contact1" element={<Contact1 />} />

        {/* Bai2 */}
        <Route path="/contact2" element={<Contact2 />} />

        {/* Bai3 */}
        <Route path="/login" element={<Login />} />

        {/* Bai4 */}
        <Route path="/register" element={<Register />} />

        {/* Bai6 */}
        <Route path="/home6" element={<Home6 />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail/:id" element={<Detail />} />

        {/* Bai5 - Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;