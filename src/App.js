import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Technology from "./pages/Technology";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Test from "./pages/Test";


function App() {
   
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destination" element={<Destination />} />
                    <Route path="/crew" element={<Crew />} />
                    <Route path="/technology" element={<Technology />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
