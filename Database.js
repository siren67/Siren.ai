// SIREN CORE: RANK & COMPUTE TRACKER
const userStats = { name: "User1", kills: 0, balance_in_rupees: 500 };

function getComputePower(kills) {
    if (kills >= 1000) return { rank: "Supercomputer", starts: 300 };
    if (kills >= 500)  return { rank: "Ultimate Max", starts: 20 };
    if (kills >= 100)  return { rank: "Max User", starts: 10 };
    return { rank: "Normal User", starts: 5 };
}

// Instead of 10% tax, you charge for the "Start Pack"
function buyStarts(rupees) {
    const costPerStart = 2; // ₹2 per extra start
    return Math.floor(rupees / costPerStart);
}

console.log("Current Status:", getComputePower(userStats.kills));
