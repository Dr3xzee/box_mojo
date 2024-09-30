document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById('chat-box');
    const inputField = document.getElementById('input-field');
    const sendButton = document.getElementById('send-button');

    // Load existing learned responses from localStorage
    const loadLearnedResponses = () => {
        const learnedResponses = localStorage.getItem('learnedResponses');
        return learnedResponses ? JSON.parse(learnedResponses) : {};
    };

    const saveLearnedResponses = (responses) => {
        localStorage.setItem('learnedResponses', JSON.stringify(responses));
    };

    let responses = {
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "bye": "Goodbye! Have a nice day!",
        "show me what you learned": "Here are the learned responses: {LEARNED_RESPONSES}",
        "default": "Sorry, I don't understand that. Can you ask something else?",
        "hi": "hey",
        "Hi": "hey"
        
    };

    responses = {...responses, ...loadLearnedResponses()};

    // Function to display a message
    function displayMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('message', type);
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }

    // Function to get a response from the chatbot
    function getBotResponse(userMessage) {
        const normalizedMessage = userMessage.toLowerCase().trim();
        return responses[normalizedMessage] || responses["default"];
    }

    // Function to learn new responses
    function learnNewResponse(userMessage, botResponse) {
        const normalizedMessage = userMessage.toLowerCase().trim();
        responses[normalizedMessage] = botResponse;
        saveLearnedResponses(responses);
    }

    // Function to display all learned responses
    function showLearnedResponses() {
        const learnedResponses = loadLearnedResponses();
        if (Object.keys(learnedResponses).length === 0) {
            return "I haven't learned anything yet.";
        }
        return Object.entries(learnedResponses)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');
    }

    // Handle sending a message
    function handleSendMessage() {
        const userMessage = inputField.value.trim();
        if (userMessage) {
            displayMessage(userMessage, 'user-message');

            if (userMessage.toLowerCase().trim() === 'show me what you learned') {
                const learnedResponses = showLearnedResponses();
                displayMessage(learnedResponses, 'bot-message');
            } else {
                const botResponse = getBotResponse(userMessage);

                if (botResponse === responses["default"]) {
                    // If the bot doesn't understand, ask for a response to learn
                    const newResponse = prompt("I don't know how to respond to that. How should I reply?");
                    if (newResponse) {
                        learnNewResponse(userMessage, newResponse);
                        displayMessage(newResponse, 'bot-message');
                    }
                } else {
                    displayMessage(botResponse, 'bot-message');
                }
            }

            inputField.value = ""; // Clear input field
        }
    }

    // Event listener for send button
    sendButton.addEventListener('click', handleSendMessage);

    // Event listener for pressing Enter key
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
});



