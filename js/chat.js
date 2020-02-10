function chatOpen() {
    console.log("Chat Opened")

    document.getElementById("chat").style.display = "inherit";
    document.getElementById("chat-alert").style.display = "none";

    document.getElementById('notify').play();
}

function closeChat() {
    console.log("Chat Closed")

    document.getElementById("chat").style.display = "none";
    document.getElementById("chat-alert").style.display = "inherit";
}