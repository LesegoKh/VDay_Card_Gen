document.getElementById("envelope").addEventListener("click", function() {
    toggleEnvelope();  
    updateLetter();    
});

document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("whatsappShareButton").addEventListener("click", function () {
        shareOnWhatsApp();
    });
});

function shareOnWhatsApp() {
    const nameInput = document.getElementById("nameInput").value;
    const messageInput = document.getElementById("messageInput").value;

    const name = nameInput ? nameInput : "My Love";
    const message = messageInput
        ? messageInput
        : "<hr>Happy Valentine's Day!❤️ You are the best thing that ever happened to me. Love you forever! ❤️";

   
    console.log("Sharing on WhatsApp:", name, message);

    
    const whatsappMessage = `To: ${name}%0A${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodedMessage}`;

    
    window.open(whatsappURL, "_blank");
}


function toggleEnvelope() {
    const envelope = document.getElementById("envelope");
    envelope.classList.toggle("open");
}

function updateLetter() {
    const nameInput = document.getElementById("nameInput").value;
    const messageInput = document.getElementById("messageInput").value;
    
    
    document.getElementById("toName").innerText = "To: " + (nameInput ? nameInput : "My Love");
    document.getElementById("messageText").innerHTML = messageInput ? messageInput : "Happy Valentine's Day!❤️<br>You are the best thing that ever happened to me.<br>Love you forever! ❤️";
    
    
    const letter = document.querySelector('.letter');
    if (letter) {
        letter.style.transform = 'translateY(-100%)';
        letter.style.opacity = 1;
    }
}


function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML ="❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    const duration = Math.random() * 2 + 3;
    heart.style.animationDuration = duration + "s";

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 100);
