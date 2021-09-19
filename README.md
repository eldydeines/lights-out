# Lights Out - The Game
Lights Out is a logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit. The puzzle is won when when all of the lights are turned off.

You can click on a cell to toggle that light — but it also toggles the light above it, to the left of it, to the right of it, and below it. (Cells on an edge or in the corner won’t flip as many lights, since they are missing some neighbors).

## Plan
Think about how you would design this, component-wise.

- We would need a board component
- We would need a cell component

- Props needed will be number of rows and columns of the grid. 
- State would be on the board (parent component) as the siblings are impacted by a sibling.

## Code
When the game is won, the board should not be shown, but a simple “You Won” message should show in its place.
A small amount of code is provided, but there are lots of places where you’ll need to write code to get the game functional.