import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import HeadNav from "../components/HeadNav/index";
import LeftNav from "../components/LeftNav/index";
// import { allEvents } from '../../../api/controllers/calendar.';
// import { getAllEvents } from '../../../api/controllers/calendar.js';
// import axios from "axios";


const getAllEvents = () => {
    fetch("http://localhost:8080/calendar").then(response => response.json()).then(data => console.log(data))
}

var descList = []
var dateList = []

for (var event in getAllEvents) {
    descList.push(event.Description)
    dateList.push(event.ActivityDate)
}
console.log(dateList)
const myEventsList = [
    {
        title: "sprint meeting",
        // allDay: true,
        start: new Date(2022,11,14),
        end: new Date(2022,11,14)
    },
    {
        title: dateList[0],
        // allDay: true,
        start: new Date(2022,10,24),
        end: new Date(2022,10,24)
    },
    {
        title: dateList[1],
        // allDay: true,
        start: new Date(2022,10,25),
        end: new Date(2022,10,25)
    },
    {
        title: dateList[2],
        // allDay: true,
        start: new Date(2022,10,26),
        end: new Date(2022,10,26)
    }
]

// const myEventsList = allEvents


console.log("testing import getallevents")
console.log(getAllEvents)


const localizer = momentLocalizer(moment)

export default function Event() {
    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     try {
    //         console.log("before axios")
    //         await axios.post("/auth/register", inputs)
    //         // console.log(res)
    //         navigate("/login"); 
    //     }
    //     catch(err) {
    //         console.log(err)
    //     }
    //     console.log("registration submitted")
    // };
return (
    <div className="myCustomHeight">
        {HeadNav()}
        <div className="d-flex justify-content-between container h-100">

        {LeftNav()}
        <Calendar
            localizer={ localizer }
            events={ myEventsList }
            startAccessor="start"
            endAccessor="end"
            style = {{height:600, width:1000, marginTop: "50px"}}
        />
    </div>
    </div>
)
}