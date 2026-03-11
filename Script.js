// REPLACE EVERYTHING IN script.js WITH THIS
const API_KEY = "PASTE_YOUR_GEMINI_API_KEY_HERE"; // Did you get this from Google AI Studio?
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

async function askSiren() {
    const inputField = document.getElementById('userInput');
    const container = document.getElementById('chat-container');
    const text = inputField.value.trim();

    if (!text) {
        alert("Please type something first!");
        return;
    }

    // Show user message immediately
    container.innerHTML += `<div class="msg user">${text}</div>`;
    inputField.value = "";
    container.scrollTop = container.scrollHeight;

    try {
        console.log("Starting API Call...");
        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: text }] }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            alert("API Error: " + errorData.error.message);
            return;
        }

        const data = await response.json();
        const aiResponse = data.candidates[0].content.parts[0].text;

        // Show Bot Message
        container.innerHTML += `<div class="msg bot">${aiResponse}</div>`;
        
        // Save the Kill!
        let kills = parseInt(localStorage.getItem('siren_kills')) || 0;
        localStorage.setItem('siren_kills', kills + 1);
        if(typeof updateScouter === "function") updateScouter();

    } catch (error) {
        alert("System Crash: " + error.message);
    }
    container.scrollTop = container.scrollHeight;
            }
