let chatON = 0

function chatOpen() {
    console.log("Chat Opened")

    document.getElementById("chat").style.display = "inherit";
    document.getElementById("chat-alert").style.display = "none";
}

function closeChat() {
    console.log("Chat Closed")

    document.getElementById("chat").style.display = "none";
    document.getElementById("chat-alert").style.display = "inherit";
}