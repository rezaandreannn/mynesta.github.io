const romanticText = "Every moment spent with you is a blessing, my love. The laughter we share, the memories we make, and the love we give each other are treasures that I will always hold dear to my heart. You are my everything, my sunshine on a cloudy day, my shelter from the storm. As we celebrate our love on this special day, I promise to love you more each and every day for the rest of my life.";
const textElement = document.getElementById("romantic-text");

let index = 0;

const typeText = () => {
    if (index < romanticText.length) {
        textElement.innerHTML += romanticText.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
};

typeText();

var audio = document.getElementById("audio");
var playButton = document.getElementById("play-button");

playButton.addEventListener("click", function () {
    audio.play();
});

document.getElementById("love-button").addEventListener("click", function () {
    document.getElementById("love-sign").innerHTML = "❤️";
    document.getElementById("love-sign").style.display = "block";
});