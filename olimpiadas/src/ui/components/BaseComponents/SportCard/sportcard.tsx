import { Event } from "../../../../types/olimpic";

const SportCard = ({ sport, image, onClick }: { sport: object, image: string, onClick?: () => void }) => {
    return (
        <div id="sport-card" className="max-h-48 flex flex-row justify-around items-center bg-slate-500 border-4 rounded-md border-green-700 m-2" onClick={onClick}>
            <img src={image} alt="idk something" className="overflow-visible h-96" />
            <div className="flex items-center justify-evenly flex-row">
                <div id="description" className="p-2 flex-1">
                    <h1 id="sportname" className="font-semibold text-2xl">{sport.name}</h1>
                    <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa error doloribus, repellendus quidem quis assumenda. Harum optio doloribus deleniti! In totam libero, corrupti natus enim rerum ad velit omnis quos.</p>
                </div>
                <div id="events" className="flex flex-col w-2/5 items-center">
                    <div className="">card goes here</div>
                </div>
            </div>
        </div>
    )
}

export default SportCard;
