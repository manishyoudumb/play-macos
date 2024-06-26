# Just a Cube

A rubik's cube solver.


&nbsp;

## Play It

https://cube-keir.vercel.app


&nbsp;

## Structure

```
├── cube
│   └── js
│       ├── lbl.js                  # Layer by layer algorithm
│       ├── two-phase.js            # Two-phase algorithm
│       ├── util.js                 # Type, shuffle and reset
│       └── initial.js              # Initial a cube
└── lib
    ├── cubejs                      # Two-phase algorithm
    └── cuber                       # Rubik's cube simulator
```


&nbsp;


### Face

```

                                               Back(B)
                                             -----------
                                           /   Up(U)   /|
                                          /     1     / |
                                          -----------  Right(R)
                                         |           |  |
                                 Left(L) |  Front(F) |  .
                                         |           | /
                                         |           |/
                                          -----------
                                            Down(D)
```


&nbsp;

### Slice

- **Standing(S):** The layer between F and B
- **Middle(M):** The layer between L and R
- **Equator(E):** The layer between U and D


&nbsp;

### Default Color

- Front: Blue
- Back: Green
- Left: Orange
- Right: Red
- Up: Yellow
- Down: White


&nbsp;

### Rotations

#### Face

A **capital** letter by each face itself means a **clockwise** rotation of the face while a **counterclockwise** turn is marked by a **small** letter.

For example:

- **U:** A quarter clockwise turn on the Up face (90°).

- **u:** A quarter counterclockwise turn on the Up face (-90°).

![twist](assets/twist.jpg)

#### Slice

- **S/s:** Rotate slice **S** like a **F/f**

- **M/m:** Rotate slice **M** like a **L/l**

- **E/e:** Rotate slice **E** like an **U/u**

#### Whole Cube

- **X/x:** Rotate the cube like a **R/r**
- **Y/y:** Rotate the cube like an **U/u**
- **Z/z:** Rotate the cube like a **F/f**


&nbsp;

## Algorithm

### Layer By Layer

- [x] The First Layer Edges |
- [x] The First Layer Corners |
- [x] The Second Layer |
- [x] The Top Cross | 
- [x] The Third Layer Corners (Position) |
- [x] The Third Layer Corners (Orient) |
- [x] The Third Layer Edges |

### Two-Phase Algorithm


