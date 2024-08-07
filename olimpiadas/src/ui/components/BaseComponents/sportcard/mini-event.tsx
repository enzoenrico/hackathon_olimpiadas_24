import { Event } from "../../../../types/olimpic"

const Minievent = ({ event }: { event: Event }) => {
    return (
        <div id="event-wrapper" className="m-2 min-w-fit h-1/4 flex items-center justify-around border-2 border-green-300 rounded-full p-2">
            <img id="discipline-pictogram" className="rounded-full border-black border-2 w-1/6 " src={event.discipline_pictogram} alt="discipline" />
            <h2 id="event-name">{event.detailed_event_name}</h2>
            <p id="event-time">{event.start_time}</p>
            <button onClick={() => window.location.href = `/event/${event.id}`}>View</button>
        </div>
    )
}
export default Minievent
