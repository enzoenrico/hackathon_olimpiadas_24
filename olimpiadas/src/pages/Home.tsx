import GoldMedal from "../assets/gold_medal.png"
import SilverMedal from "../assets/silver_medal.png"
import BronzeMedal from "../assets/bronze_medal.png"

const Home = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="md:justify-center md:gap-[200px] gap-2 items-center flex md:mt-[100px] mt-[50px] md:flex-row flex-col bg-[#7a8ea1] w-full md:py-[160px] py-[50px] border-r-blue-200">
        <h1 className="md:text-[50px] text-[30px]">
          JOGOS <br />
          OLIMPICOS
        </h1>
        <p className="md:w-[719px] w-[200px] md:text-3xl text-xl text-center texl-base">
          "As Olimpíadas são o maior evento esportivo do mundo, no qual países
          dos cinco continentes se reúnem para competir em diversas modalidades.
          Acontecem a cada quatro anos e são divididos entre as edições de verão
          e de inverno."
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-14 my-[250px]">
        <div className="bg-[#B6C7AA] w-[332px] h-[390px] relative flex justify-center items-center rounded-lg">
          <div className="bg-[#F7F9F2] w-[274px] h-[324px] flex flex-col items-center justify-between rounded-lg">
            <img
              src={SilverMedal}
              alt="Medalha de Prata"
              className="w-[180px] h-[200px]"
            />
            <button className="bg-[#B6C7AA] hover:bg-[#cadabd] transition duration-700 ease-in-out text-white px-6 py-4 mb-3 text-xl rounded-sm shadow-lg">
              PROGRAMAÇÃO
            </button>
          </div>
        </div>
        <div className="bg-[#B43F3F] w-[400px] h-[500px] relative flex justify-center items-center rounded-lg">
          <div className="bg-[#F7F9F2] w-[350px] h-[450px]   flex flex-col items-center justify-between rounded-lg">
            <img
              src={GoldMedal}
              alt="Medalha de Ouro"
              className="w-[162px] h-[287px]"
            />
            <button className="bg-[#B43F3F] hover:bg-[#c96b6b] transition duration-700 ease-in-out text-white px-6 py-4 mb-3 text-xl rounded-sm shadow-lg">
              RESULTADOS
            </button>
          </div>
        </div>
        <div className="bg-[#FFD35A] w-[332px] h-[390px] relative flex justify-center items-center rounded-lg">
          <div className="bg-[#F7F9F2] w-[274px] h-[324px] flex flex-col items-center justify-between rounded-lg">
            <img
              src={BronzeMedal}
              alt="Medalha de Bronze"
              className="w-[115px] h-[195px]"
            />
            <button className="bg-[#FFD35A] hover:bg-[#fdde87] transition duration-700 ease-in-out text-white px-6 py-4 mb-3 text-xl rounded-sm shadow-lg">
              ESPORTES
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
