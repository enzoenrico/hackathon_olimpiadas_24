import { useFetch, FetchingState } from "../hooks/fetcher"
import GoldMedal from "./gold_medal.png"

const Home = () => {
    return (
        <section className="flex flex-col items-center">
            <div className="md:justify-center md:gap-[200px] gap-2 items-center flex md:pt-[200px] pt-3 md:flex-row flex-col">
                <h1 className="md:text-[50px] text-[30px]">
                    JOGOS <br />
                    OLIMPICOS
                </h1>
                <p className="md:w-[719px] w-[200px] md:text-3xl text-xl text-center">
                    "As Olimpíadas são o maior evento esportivo do mundo, no qual países
                    dos cinco continentes se reúnem para competir em diversas modalidades.
                    Acontecem a cada quatro anos e são divididos entre as edições de verão
                    e de inverno."
                </p>
            </div>
            <div className="mt-10">
                <div className="bg-[#B43F3F] w-[400px] h-[500px] relative flex justify-center items-center rounded-lg">
                    <div className="bg-[#F7F9F2] w-[350px] h-[450px] flex flex-col items-center justify-between rounded-lg">
                        <img
                            src={GoldMedal}
                            alt="Medalha de Ouro"
                            className="w-[162px] h-[287px]"
                        />
                        <button className="bg-[#B43F3F] text-white">Resultados</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
