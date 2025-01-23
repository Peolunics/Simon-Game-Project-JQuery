let allRounds = [];
const sequenceLength = 10; // Number of rounds

function gameSequenceGenerator() {
    const colorsArray = ["green", "red", "yellow", "blue"];

    // Generate sequences for all rounds
    for (let j = 0; j < sequenceLength; j++) {
        const currentRoundSequence = [];
        for (let i = 0; i <= j; i++) {
            const randomNumber = Math.floor(Math.random() * 4);
            currentRoundSequence.push(colorsArray[randomNumber]);
        }
        allRounds.push(currentRoundSequence);
    }
}

function gameInitial() {
    currentSequenceId = 0; // Start from round 0
    allRounds = []; // Reset sequences
    gameSequenceGenerator();
    $("#level-title").text("Level 1"); // Set level title
    gameStarts(currentSequenceId);
}

function gameStarts(currentSequenceId) {
    let currentInputSequence = [];
    const currentSequence = allRounds[currentSequenceId];

    // Play the current sequence
    playInSequence(currentSequence);

    // Handle user clicks
    $(".btn").off("click").on("click", function () {
        const buttonId = $(this).attr("id");
        currentInputSequence.push(buttonId);

        // Play sound and animate the clicked button
        playSoundAndAnimate(buttonId);

        // Check user input at each step
        const currentIndex = currentInputSequence.length - 1;
        if (buttonId !== currentSequence[currentIndex]) {
            gameOver();
            return;
        }

        // If user completes the sequence correctly
        if (currentInputSequence.length === currentSequence.length) {
            $(".btn").off("click"); // Remove click listeners
            setTimeout(() => {
                currentSequenceId++;
                if (currentSequenceId < sequenceLength) {
                    $("#level-title").text(`Level ${currentSequenceId + 1}`); // Update level title
                    gameStarts(currentSequenceId);
                } else {
                    $("#level-title").text("Congratulations! You Won!");
                }
            }, 1000);
        }
    });
}

function playInSequence(currentSequence) {
    currentSequence.forEach((color, index) => {
        setTimeout(() => {
            playSoundAndAnimate(color);
        }, index * 1000); // Play every 1 second
    });
}

function playSoundAndAnimate(color) {
    if (color === "wrong") {
        const sound = new Audio(`./sounds/${color}.mp3`);
        sound.play();
        gameOverAnimation();
    } else {
        // Play the sound
        const sound = new Audio(`./sounds/${color}.mp3`);
        sound.play();

        // Animate the button
        buttonAnimation(color);
    }
}

function buttonAnimation(currentKey) {
    const activeButton = $("#" + currentKey);
    activeButton.addClass("pressed");
    setTimeout(() => {
        activeButton.removeClass("pressed");
    }, 100); // Animation duration
}

function gameOver() {
    playSoundAndAnimate("wrong");
    $("#level-title").text("Game Over");
    $(".btn").off("click"); // Remove click listeners
}

function gameOverAnimation() {
    const activeButton = $("body");
    activeButton.addClass("game-over");
    setTimeout(() => {
        activeButton.removeClass("game-over");
    }, 200); // Animation duration
}

// Start the game when the button is clicked
$("button").click(() => {
    gameInitial();
});
