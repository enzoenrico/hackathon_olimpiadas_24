import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./ui/components/BaseComponents/NavBar/navbar"
import Sportcard from "./ui/components/BaseComponents/sportcard/sportcard"


// #F7F9F2

const App = () => {
    return (
        <>
            <div className="h-fit bg-[#F7F9F2]">
                {/* <div className="h-fit bg-gradient-to-b from-white to-blue-200"> */}
                <NavBar />
                <div className="flex justify-center items-center h-full ">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sports" element={<Sportcard />} />
                        <Route path="/events" element={<Home />} />
                        <Route path="/events/:id" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
