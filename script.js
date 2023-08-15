const generatePoem = () => {
  const randomIndex = Math.floor(Math.random() * poemLines.length);
  poemContainer.innerHTML = poemLines[randomIndex];
};

// Function to calculate milliseconds until the next specified time (2:53 PM)
function calculateTimeUntil253PM() {
  const now = new Date();
  const next253PM = new Date(now);
  next253PM.setHours(5, 0, 0, 0);

  if (now > next253PM) {
    next253PM.setDate(next253PM.getDate() + 1);
  }

  return next253PM - now;
}

// Call the generatePoem function immediately
generatePoem();

// Calculate the initial interval until the next specified time
const initialInterval = calculateTimeUntil253PM();

// Set the timeout to trigger the poem update
setTimeout(() => {
  generatePoem();

  // Set the interval to update every day at 2:53 PM
  const dailyInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  setInterval(generatePoem, dailyInterval);
}, initialInterval);
