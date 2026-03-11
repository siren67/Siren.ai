const API_KEY = "AIzaSyAPQxBgDDrV2dOxXIHDeFYVJnHy-RejgP8"; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

async function askSiren() {
    const inputField = document.getElementById('userInput');
    const container = document.getElementById('chat-container');
    const text = inputField.value.trim();

    if (!text) return;

    // 1. Add User Message to Screen
    container.innerHTML += `<div class="msg user">${text}</div>`;
    inputField.value = "";
    container.scrollTop = container.scrollHeight;

    // 2. Fetch from AI
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: text }] }]
            })
        });

        const data = await response.json();
        const aiResponse = data.candidates[0].content.parts[0].text;

        // 3. Add Bot Message to Screen
        container.innerHTML += `<div class="msg bot">${aiResponse}</div>`;
    } catch (error) {
        container.innerHTML += `<div class="msg bot" style="color:red">Error: Check Connection</div>`;
    }
    container.scrollTop = container.scrollHeight;
                  }
