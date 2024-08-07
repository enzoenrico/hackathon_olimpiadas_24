import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./ui/components/BaseComponents/NavBar/navbar"
import Sports from "./ui/components/BaseComponents/Sports/Sports"

import { useFetch } from "./hooks/fetcher"

const App = () => {
    const { data, isLoading, isError } = useFetch<ApiResponse>({ fetchParams: { method: "GET" } });
    return (
        <>
            <div className="h-fit bg-[#F7F9F2]">
                <NavBar />
                <div className="flex justify-center items-center h-full ">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sports" element={<Sports />} />
                        <Route path="/events" element={<Home />} />
                        <Route path="/events/:id" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
