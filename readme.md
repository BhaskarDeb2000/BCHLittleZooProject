# Little Zoo 🐾

**Little Zoo** is a simple web application for managing and displaying animals in a zoo. The application allows users to view animal details, filter animals by type and gender, search by name or species, and add new animals dynamically. 

## Features
- **Animal Display**: View a list of animals with detailed descriptions.
- **Filter Animals**: Filter animals by type (e.g., Mammal, Bird) and gender.
- **Search Functionality**: Search for animals by name or species.
- **Add New Animals**: Use the form to add new animals to the list.
- **Dynamic Updates**: Newly added animals are displayed without refreshing the page.

## Demo
Click [HERE](https://bch-little-zoo-project.vercel.app/) to see the live demo.

## Project Structure
The project consists of the following files:
- `index.html`: Contains the structure and content of the webpage.
- `littlezoo.css`: Stylesheet for layout and design.
- `littlezoo.js`: JavaScript for adding functionality, including filtering, searching, and form handling.

## Setup and Installation
To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/BhaskarDeb2000/BCHLittleZooProject
    ```
2. **Navigate to the project directory**:
    ```bash
    cd little-zoo
    ```
3. **Open the HTML file**:
   - You can simply open `index.html` in your preferred web browser to view the project.

## Usage
### 1. Viewing Animals
- By default, a list of zoo animals is displayed on the page with their details.

### 2. Filtering Animals
- Use the dropdown menus at the top to filter animals by **Type** or **Gender**.
  
### 3. Searching Animals
- Type in the search box to find animals by **Name** or **Species**.

### 4. Adding a New Animal
- Click the **Add New Animal** button to open the form.
- Fill out the form with the animal's details and click **Add Animal**.
- The animal will be added to the list instantly.

## Project Structure
- **index.html**: The main HTML file with the structure of the app.
- **littlezoo.css**: Styles for the layout, form, and animal display.
- **littlezoo.js**: JavaScript file that provides functionality for displaying animals, filtering, searching, and adding new animals.

## Code Structure
The project includes the following main functions in `littlezoo.js`:
- `displayAnimals(animals)`: Renders animals on the page.
- `addAnimal(name, age, gender, species, type, description)`: Adds a new animal to the list.
- Event listeners for:
  - Filtering by type and gender.
  - Searching by name or species.
  - Toggling the form's visibility.

## Technologies Used
- **HTML5**: For the structure of the application.
- **CSS3**: For styling and layout.
- **JavaScript**: For functionality and interactivity.

## Future Improvements
- **Persistent Storage**: Use local storage or a backend to save animal data.
- **Image Upload**: Allow users to upload animal images.
- **Enhanced Filtering**: Support multiple filters simultaneously.
  
## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions or improvements.

## License
This project is licensed under the MIT License.

---

Enjoy managing your virtual zoo with **Little Zoo**! 🦁🐘🐢
