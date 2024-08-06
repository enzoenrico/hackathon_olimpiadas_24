import Home from "./pages/Home"
import NavBar from "./ui/components/BaseComponents/NavBar/navbar"

// #F7F9F2

const App = () => {
  return (
    <>
      <div className="w-screen h-fit bg-[#F7F9F2]">
        <NavBar />
        <Home />
      </div>
    </>
  )
}

export default App
