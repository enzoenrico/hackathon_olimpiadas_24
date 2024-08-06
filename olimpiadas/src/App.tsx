import Home from "./pages/Home"
import NavBar from "./ui/components/BaseComponents/NavBar/navbar"
import SportCard from "./ui/components/BaseComponents/SportCard/sportcard"

// #F7F9F2

const App = () => {
    const sport = {
        name: "Soccer",
        players: 11,
        origin: "England"
    }
    return (
        <>
            <div className="w-screen h-fit bg-[#F7F9F2] md:px-[200px]">
                <SportCard sport={sport} image="https://via.placeholder.com/150" />

                <NavBar />
                <Home />
            </div>
        </>
    )
}

export default App
