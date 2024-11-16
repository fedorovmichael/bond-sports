
# Star Wars Characters Application

A React application that fetches and displays Star Wars characters using the SWAPI API. Users can search for characters, view details in a modal, and manage a favorites list.

---

## 1. How to Run the Application

### Prerequisites
- Node.js (version 16 or later)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/fedorovmichael/bond-sports.git
   cd star-wars-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
4. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

---

## 2. Breakdown of Components

### UI Components
- **SearchableList**:
  - Displays a list of characters fetched from the SWAPI API.
  - Includes a search bar for filtering characters by name.
  - Each character is displayed as a card with the name, a random image, and a button to add the character to the favorites list.
  - Clicking on a card opens a modal with detailed information.

- **CharacterCard**:
  - A card component displaying the character's name, image, and a button to add the character to favorites.

- **ModalDetails**:
  - A modal displaying detailed information about the selected character, including height, mass, birth year, the number of films they appear in, and homeworld details.

- **FavoritesList**:
  - Displays a list of characters marked as favorites.
  - Allows users to remove characters from the favorites list.

### Layout and Styling
- **Grid** and **Box** components from Material-UI are used to organize the layout.
- Styling is done using Material-UI's `sx` prop and CSS Modules for component-specific styles.

---

## 3. Services

### API Service
The application interacts with the **SWAPI API** to fetch data. The `useStarWarsAPI` hook is responsible for:
- Fetching characters with pagination.
- Fetching homeworld details for each character.
- Returning a `loading` state to show a spinner while data is being fetched.

### State Management
State is managed using React's built-in hooks:
- `useState` for local component states.
- `useEffect` for handling side effects, such as API calls.
- The state is kept at the top-level `App` component and passed down as props to child components.

---

## 4. Interaction flow diagram

Interaction flow diagram can see in file:
"interaction_flow_diagram.png" in root of project.
