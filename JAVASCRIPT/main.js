
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the Community Portal");
  alert("Page fully loaded");

  const events = [
    { name: "Music Fest", date: "2025-06-20", seats: 50, category: "Music" },
    { name: "Clean Drive", date: "2025-04-15", seats: 0, category: "Cleanliness" },
    { name: "Food Festival", date: "2025-07-10", seats: 20, category: "Food" }
  ];

  // Display events
  const upcomingEvents = events.filter(e => new Date(e.date) > new Date() && e.seats > 0);
  const eventContainer = document.querySelector("#eventsContainer");
  upcomingEvents.forEach(event => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${event.name}</h3><p>${event.date}</p><p>Seats: ${event.seats}</p>
                     <button onclick="register('${event.name}')">Register</button>`;
    eventContainer.appendChild(div);
  });

  // Store registrations
  let registrationCount = 0;
  window.register = function(name) {
    try {
      registrationCount++;
      alert(\`Registered for \${name}. Total registrations: \${registrationCount}\`);
    } catch (err) {
      console.error("Registration failed", err);
    }
  };
});
