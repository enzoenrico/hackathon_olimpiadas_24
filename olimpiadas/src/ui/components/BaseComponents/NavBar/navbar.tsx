import logo from "./logo.png"

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center gap-8 pt-5">
      <a
        href="#"
        className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        PROGRAMAÇÃO
      </a>
      <img
        src={logo}
        alt="logo das olímpiadas"
        className="md:w-[300px] w-[100px]"
      />
      <a
        href="#"
        className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        ESPORTES
      </a>
    </nav>
  )
}

export default NavBar
