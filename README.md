# Tic Tac Toe Game

A simple web-based Tic Tac Toe game built using HTML, CSS, and JavaScript. This is a two-player game where players take turns to mark X and O on a 3×3 grid.

## Preview

![Tic Tac Toe Screenshot](pics/Screenshot%202025-05-28%20172735.png) ![Tic Tac Toe Screenshot](pics/Screenshot%202025-05-28%20172817.png)

## Features

- Two-player turn-based gameplay
- Win detection for all combinations (rows, columns, diagonals)
- Draw detection
- "Reset Game" and "Play Again" functionality
- Responsive and clean UI
- Visual indication of winning combinations

## Technologies Used

- **HTML:** Structure of the game
- **CSS:** Styling the layout and elements
- **JavaScript:** Game logic and interactivity

## Project Structure

```
tic_tac_toe/
├── index.html       # Main HTML file
├── style.css        # CSS styling
├── game.js          # JavaScript game logic
├── pics/            # Images and screenshots
└── README.md        # Project documentation
```

## How to Run

1. Clone or download the repository
2. Open `index.html` in your browser

```bash
git clone https://github.com/knoxiboy/Tic_Tac_Toe_Game.git
cd tic_tac_toe
open index.html
```

## Program Details

The Tic Tac Toe game consists of three main files:

- **index.html**: Contains the structure of the game with:
  - A title and welcome message
  - A 3x3 grid of clickable cells
  - Reset and Play Again buttons
  - A result display area that shows game outcomes

- **style.css**: Provides styling for the game with:
  - A centered layout with appropriate spacing
  - A visually appealing color scheme (green background with contrasting elements)
  - Circular cells for the game board
  - Responsive design that works on different screen sizes
  - Visual feedback for interactive elements

- **game.js**: Implements the core game logic:
  - Tracks player turns (X and O)
  - Handles cell clicks and marks the board
  - Checks for winning conditions (8 possible combinations)
  - Detects draw conditions when the board is full
  - Updates the UI based on game results
  - Provides reset functionality to start a new game

## Game Rules

- The game is played on a 3x3 grid
- One player is X, and the other is O
- Players take turns putting their marks in empty squares
- The first player to get 3 of their marks in a row (vertically, horizontally, or diagonally) wins
- If all 9 squares are filled and no player has won, the game ends in a draw

## Gameplay

- Players alternate turns placing their marks (X or O) on the grid
- The first player to achieve three of their marks in a row wins
- Winning combinations are highlighted
- After a game ends, you can reset the board to play again

## Possible Improvements

- Add single-player mode with AI
- Add scoreboard to track wins/draws
- Add animations and sound effects
- Improve mobile responsiveness
- Add player name input
- Add game statistics tracking

## Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a Pull Request