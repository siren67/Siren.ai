// SIREN CORE: TOURNAMENT MIXER
const agents = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa"];

function runSirenTournament(inputAgents) {
    console.log("Stage 1: Initial 5 Pairs Fighting...");
    let stage1Winners = [];
    for (let i = 0; i < 10; i += 2) {
        // The "Kill" Logic: Simulating a winner based on a mock calculation
        stage1Winners.push(`Winner(${inputAgents[i]}+${inputAgents[i+1]})`);
    }

    console.log("Stage 2: Mixing 5 into 3 (Fans + Single)...");
    // We mix the first four into two pairs, and keep the 5th as the 'Single'
    let stage2 = [
        `Mix(${stage1Winners[0]}, ${stage1Winners[1]})`, 
        `Mix(${stage1Winners[2]}, ${stage1Winners[3]})`,
        stage1Winners[4] // The "Single" you mentioned using later
    ];

    console.log("Stage 3: Final 2-Way Convergence...");
    let stage3 = [`Final(${stage2[0]}, ${stage2[1]})`, stage2[2]];

    console.log("Stage 4: THE SINGLE RESULT (The Input for Next Phase)");
    return `CORE_OUTPUT[${stage3[0]} + ${stage3[1]}]`;
}

console.log(runSirenTournament(agents));
