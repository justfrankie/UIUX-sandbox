#mouseover vs mouseover vs mousemove

While I was working on the code project yesterday, I came across two event handlers that handle mouse hovering over an element, mouse-enter and mouse-over. While both of these event handlers behave extremely similarly, they serve the interactivity of the mouse with different purposes.

Mouse enter differs from mouse-over in that it doesn’t interact with any descendants of the hovered-over element. In other words, mouse-enter only triggers when the users’ mouse cursor “enters” the delegated element.

Mouse over bubbles and triggers an event each time the cursor is “over” the delegated element, along with its children elements.

I included a useful visual representation of the difference; hope it’s helpful seeing visually the differences between the two, along with mouse-move as well!
