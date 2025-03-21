import React, { useState } from "react";
import "./Events.css";

const initialEvents = [
  {
    id: 1,
    title: "Sunday Worship Gathering",
    date: "2025-03-10",
    time: "10:00 AM",
    location: "Grace Community Church",
    category: "Religious",
    description: "Join us for a powerful time of worship, prayer, and fellowship.",
  },
  {
    id: 2,
    title: "Youth Fellowship Night",
    date: "2025-03-28",
    time: "6:30 PM",
    location: "City Outreach Center",
    category: "Social",
    description: "An evening filled with fun, worship, and inspirational talks.",
  },
  {
    id: 3,
    title: "Charity Fundraiser for Families in Need",
    date: "2025-04-05",
    time: "2:00 PM",
    location: "Hope Community Hall",
    category: "Charity",
    description: "Join us in making a difference by supporting underprivileged families.",
  },
  {
    id: 4,
    title: "Bible Study Session",
    date: "2025-02-25",
    time: "7:00 PM",
    location: "Community Hall",
    category: "Religious",
    description: "Deep dive into the scriptures and learn together.",
  },
];

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    category: "Religious",
  });

  const currentDate = new Date();

  // Filtered Events List
  const filteredEvents = events.filter((event) => {
    return categoryFilter === "All" || event.category === categoryFilter;
  });

  // Sort by date
  const sortedEvents = filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Add new event
  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date) return;

    const newEventObj = {
      id: events.length + 1,
      title: newEvent.title,
      date: newEvent.date,
      time: "TBD",
      location: "To Be Announced",
      category: newEvent.category,
      description: "Details coming soon...",
    };

    setEvents([...events, newEventObj]);
    setNewEvent({ title: "", date: "", category: "Religious" });
  };

  return (
    <div className="events-container">
      <header className="events-header">
        <h1>Events</h1>
        <p>Stay connected and be part of our community.</p>
      </header>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label>Filter by Category:</label>
        <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      {/* Event Form */}
      <div className="event-form-container">
        <h2>Add New Event</h2>
        <form onSubmit={handleAddEvent}>
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            required
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            required
          />
          <select onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })} value={newEvent.category}>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
          <button type="submit">Add Event</button>
        </form>
      </div>

      {/* Events List */}
      <div className="events-list">
        {sortedEvents.map((event) => {
          const eventDate = new Date(event.date);
          const isPastEvent = eventDate < currentDate;

          return (
            <div key={event.id} className={`event-card ${isPastEvent ? "past-event" : ""}`}>
              <h2>{event.title}</h2>
              <p className="event-date">{event.date} | {event.time}</p>
              <p className="event-category">📌 {event.category}</p>
              <p className="event-location">📍 {event.location}</p>
              <p className="event-description">{event.description}</p>
              {!isPastEvent && <button className="join-button">Join Event</button>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
