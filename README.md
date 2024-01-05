# Codeial - Simple Social Media Web App For Coders

Codeial is a lightweight social media web application for coders built using Node.js, Express, and MongoDB. It provides basic features for user authentication, publishing, deleting posts and comments, and editing profile information. This project serves as a simple demonstration of these functionalities.

## Screenshot

![Codeial - Homepage Screenshot](https://github.com/krishnashah122/Codeial/assets/64410232/91236469-b9db-4aa2-8b6e-4c8587372961)

## Features

- **User Authentication:** Users can register, log in, and log out. Passwords are securely hashed before storage.

- **Post Management:** Users can create, edit, and delete posts. Each post includes a title, content, and an optional image.

- **Comment System:** Users can leave comments on posts. Comments can be deleted by their respective authors.

- **Profile Editing:** Users have the ability to edit their profile information, including name, email, and profile picture.

## Technologies Used

- **Node.js:** A runtime environment for executing JavaScript code server-side.

- **Express:** A fast and minimalistic web application framework for Node.js.

- **MongoDB:** A NoSQL database for storing user data, posts, and comments.

- **EJS:** A simple templating engine for rendering dynamic HTML pages.

## Installation and Setup

1. Clone this repository to your local machine using:
  ```bash
  git clone https://github.com/your-username/Codeial.git
  ````

2. Navigate to the project directory:
  ````bash
  cd Codeial
  ````

3. Install the required dependencies:
  ````bash
  npm install
  ````

4. Start the application:
  ````bash
  npm start
  ````

5. Open your web browser and navigate to http://localhost:3000 to access Codeial.

## Project Structure
The project follows a simple directory structure:

- `index.js`: Entry point of the application.
- `config/`: Contains configuration files.
- `controllers/`: Contains route controllers.
- `models/`: Defines MongoDB schemas.
- `routes/`: Defines application routes.
- `views/`: Contains EJS templates for rendering pages.

## Contributions
Contributions are welcome! If you'd like to enhance the features or fix any issues, feel free to fork the repository and submit pull requests.
