# Rock Paper Scissors

A browser-based implementation of Rock Paper Scissors.

Yes, that game. The one that predates most modern problems and somehow still ends up deciding them.

---

## How It Works

You pick one of three options:

- Rock
- Paper
- Scissors

The computer does the same.

Then the rules, as they have always been, proceed without negotiation:

- Rock crushes Scissors
- Scissors cuts Paper
- Paper covers Rock

If both sides pick the same option, nothing happens except a brief moment of mutual disappointment followed by a rematch.

---

## UI Notes

This version is built with a simple browser interface.

Each choice is represented by a button with an associated game value stored using a data attribute. This keeps game logic separate from display text, because relying on what a button _looks like_ is a good way to create unnecessary future problems.

---

## Implementation Notes (For Future Me)

- Game input is handled through a single event listener
- Button selection is determined using `event.target`
- Actual game values are stored in `data-choice`
- DOM text is treated as presentation only, not logic

Translation: the browser tells you what was clicked, and the code tries not to argue with it.

---

## Gramps Commentary

- There is no hidden mechanic
- There is no skill ceiling beyond “random chance occasionally humbles you”
- Thinking harder does not influence probability
- Yes, you will still lose sometimes. That is intentional design, not a bug

---

## Goal of This Project

To demonstrate:

- basic DOM manipulation
- event-driven programming
- separation of UI and logic
- and acceptance of statistical inevitability

---

## Final Note

Rock Paper Scissors is not complicated.

It just _feels_ like it should be.
