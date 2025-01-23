# Simon Game

## Description

Simon Game is a web-based memory game where players must repeat a sequence of colors shown by the game. The sequences get progressively longer and more challenging with each round. The goal is to correctly repeat the sequences for as many rounds as possible without making a mistake.

## Features

- **Dynamic Sequence Generation**: Each round generates a new sequence based on random colors (green, red, yellow, blue).
- **Interactive Buttons**: Players interact with the game by clicking the buttons that correspond to the sequence.
- **Visual and Audio Feedback**: Buttons light up and play sounds during the sequence and user interaction.
- **Progressive Difficulty**: Sequences increase in length with each round.
- **Game Over Handling**: The game provides feedback when the user makes a mistake.
- **Winning Logic**: Players can win the game after completing all 10 levels.

## How to Play

1. **Start the Game**: Click the "Start" button or any key to begin.
2. **Watch the Sequence**: The game will highlight buttons in a specific order. Pay attention to the sequence.
3. **Repeat the Sequence**: Click the buttons in the same order as the sequence shown.
4. **Progress Through Levels**: If you correctly repeat the sequence, the game advances to the next level with a longer sequence.
5. **Game Over**: If you make a mistake, the game will end, and you can restart by clicking the button.

## Technologies Used

- **HTML5**: Structure of the web page.
- **CSS3**: Styling for buttons, animations, and layout.
- **JavaScript (ES6)**: Game logic and interactivity.
- **jQuery**: Simplified DOM manipulation and event handling.

## Project Structure

```
project-folder/
|-- index.html      # Main HTML file
|-- styles.css      # Stylesheet for the game
|-- game2.js        # JavaScript file containing game logic
|-- sounds/         # Folder containing sound files for each button and wrong sound
    |-- green.mp3
    |-- red.mp3
    |-- yellow.mp3
    |-- blue.mp3
    |-- wrong.mp3
```

## Code Explanation

### Main Functions

1. **gameSequenceGenerator**:

   - Generates random sequences for each round.
   - Uses an array of colors ["green", "red", "yellow", "blue"].

2. **gameInitial**:

   - Resets the game and initializes the first round.

3. **gameStarts**:

   - Plays the current sequence and listens for user input.
   - Validates the user's input step-by-step.

4. **playInSequence**:

   - Animates and plays the sounds for the sequence in order with delays.

5. **playSoundAndAnimate**:

   - Plays the sound and animates the corresponding button when clicked or during the sequence.

6. **buttonAnimation**:

   - Adds a "pressed" class to the button for a brief animation effect.

7. **gameOver**:

   - Handles incorrect user input, plays the "wrong" sound, and resets the game.

8. **gameOverAnimation**:

   - Adds a visual effect when the game ends.

## How to Run the Project

1. Clone the repository or download the project files.
2. Ensure all files (HTML, CSS, JavaScript, and sound files) are in the same directory.
3. Open the `index.html` file in any modern web browser.

## Future Enhancements

- Add a high score tracker.
- Provide difficulty settings (e.g., faster sequences for advanced players).
- Add a timer to make the game more challenging.
- Improve UI/UX with better animations and transitions.
- Optimize code by removing jQuery dependency.

## Acknowledgments

Inspired by the classic "Simon" memory game.

## License

This project is open-source and available under the MIT License.

