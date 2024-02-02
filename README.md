## How to start

- Switch to Node 16 `nvm use 16` before each section

### root-config

- Go to root-config folder `cd root-config`
- Install deps `npm ci`
- Run in dev mode `npm start`

### navbar

- Go to navbar folder `cd navbar`
- Install deps `npm ci`
- Run in dev mode `npm start`

### planets

- Go to planets folder `cd planets`
- Install deps `npm ci`
- Run in dev mode `npm start`

---

- Open `http://localhost:9000`

---

### How to reproduce bugs

#### Bug WITHOUT url comparison

1. Visit `http://localhost:9000`
2. Click `planets` on the navbar, see that pathname is equal to `/planets/a`
3. Click "Block" button in section with title "Blocker WITHOUT url comparison"
4. Optionally: you may type something to the textarea with title "Type something to store in component state" and remember how much times this page has been mounted
5. Click any link or button from the list:

- HTML Anchor to/planets/b
- React Router Link to/planets/b
- Button to/planets/b

  All of them routes to the pathname `/planets/b` using HTML Anchor or React Router

6. See that despite navigation is blocked we have been navigated to the `planets/b`
7. Back to the `/planets/a` by any preferred way and repeat this checklist again with a different type of link/button in case 5

**Expected behavior: When navigation is blocked we cant navigate to the `/planets/b`**

#### Bug WITH url comparison

1. Visit `http://localhost:9000`
2. Click `planets` on the navbar, see that pathname is equal to `/planets/a`
3. Click "Block" button in section with title "Blocker WITH url comparison"
4. You may type something to the textarea with title "Type something to store in component state" and remember how much times this page has been mounted - these are indicators of mounting/unmounting of Planets A
5. Click any link or button from the list:

- HTML Anchor to/planets/b
- React Router Link to/planets/b
- Button to/planets/b

  All of them routes to the pathname `/planets/b` using HTML Anchor or React Router

6. See that despite navigation is blocked we have been navigated to the `planets/b` and quickly jumped back with unmounting of Page A, causing the component to lose state
7. Back to the `/planets/a` by any preferred way and repeat this checklist again with a different type of link/button in case 5

**Expected behavior: While navigation is blocked component will not be unmounted and will not lose its state**
