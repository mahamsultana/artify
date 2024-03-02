import React from "react";
import './event.css'

function Events() {
    const events = [
    {
        id: 1,
        title: "Spring Art Exhibition",
        date: "May 15, 2024",
        location: "Artify Gallery, Cityville",
        description: "Join us for an evening of art and celebration at our Spring Art Exhibition.",
        image: "https://i.ytimg.com/vi/MwJpyG6gFx4/maxresdefault.jpg",
        time:"2:30 PM"
    },
    {
        id: 2,
        title: "Art Workshop: Watercolor Techniques",
        date: "June 5, 2024",
        location: "Artify Studio, Downtown",
        description: "Learn watercolor techniques from experienced artists at our Art Workshop.",
        image: "https://www.okeeffemuseum.org/wp-content/uploads/2023/05/CR0175-755x1024.jpg",
        time:"9:30 AM"
    },
     {
        id: 3,
        title: "Art Museum Tour",
        date: "March 5, 2024",
        location: "Artify Museum, NewYork",
        description: "Learn watercolor techniques from experienced artists at our Art Museum.",
        image: "https://wp-cpr.s3.amazonaws.com/uploads/2021/05/MONICA-CASTILLO-DENVER-ART-MUSEUM-EACH-OTHER-EXHIBIT-3-1024x680.jpg",
        time:"02:00 AM"
    },
     {
        id: 4,
        title: "Cultural Exhibition",
        date: "May 15, 2024",
        location: "Artify Gallery, Lahore",
        description: "Join us for an evening of art and celebration at our Lahore Art Exhibition.",
        image: "https://i.dawn.com/primary/2020/05/5eafb1ad17566.jpg",
        time:"05:00 PM"
    },
];


    return (
        <div className="new">
            <section className="featured-events">
                <h2 className="featured"><span className="change">Upcoming </span>Events</h2>
                <div className="events">
                    {events.map((event) => (
                        <div className="event" key={event.id}>
                            <img src={event.image} alt={event.title} />
                            <div className="infoo">
                                <h4>{event.title}</h4>
                                <p className="small">Date: {event.date}</p>
                                <p className="small">Location: {event.location}</p>
                                <p className="des">{event.description}</p>
                                <p className="small">Time: {event.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Events;
