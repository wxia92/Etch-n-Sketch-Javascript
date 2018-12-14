# Etch-n-Sketch-Javascript
Etch And Sketch Game

Description: 
This program is a javascript based etch a sketch game. Players can select either a black or rainbow pen and draw by hovering the mouse over the squares. The board can be generated into a X by X size by entering any number from 4-64 and clicking generate.

What I Learned: 
To generate the board, I first created a function that fills up one column of boxes. The column is then replicated in the x direction to create one row of the generated columns. The end result is an X by X grid that players can draw on.

To create the drawing effect, I added a hover event to each of the grid elements. To create the random color effect, I added in a color randomizer code I found online. The code generates a random color which is used as the fill color each time the grid box is hovered over.
