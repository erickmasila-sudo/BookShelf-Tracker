# ReadShelf
A minimal book tracking web app where users can log books they are reading, want to read, or have finished. Every user gets a public shareable shelf and book covers are auto-fetched from the Open Library API.

## Table of Contents

* __[Installation](#installation)__
* __[Usage](#usage)__
* __[Contributing](#contributing)__
* __[License](#license)__

## Installation

1. Clone the repository: git clone https://github.com/erickmasila-sudo/BookShelf-Tracker.git
2. Install dependencies: npm install

## Usage
To be able to see the project in localhost use  npm run dev

The live site can be accessed at __https://readshelf-8a1d8.web.app__

Features

1. Authentication
   - Sign Up - One creates an account using their email and password or via Google. A username is required during signup and is used to identify the user across the platform.
   - Log In - One can log in using their email and password or via Google.

2. Dashboard
   - Add Book - One types in the search bar and results from the Open Library API will display. Clicking a book adds it to the Want to Read shelf.
   - Shelves - Books are organized into three shelves, Want to Read, Reading and Finished. One can move books between shelves using the move button on each book card.
   - Remove - One can remove a book from their shelf using the remove button.

3. Public Shelf
   - Every user has a public shelf accessible at /shelf/:username which anyone can view without logging in.

4. Admin
   - The admin page shows all users on the platform, the most added book and the most active members.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Push your branch: `git push origin feature-name`.
5. Create a pull request.

Suggestions
* Adding a progress bar to track pages read for books in the Reading shelf.
* Reading stats page showing books finished per month and total pages read.
* Ability to write personal notes or reviews on finished books.

## License
This project is intended for educational purposes only. You may view and reference the code for learning, but reuse or redistribution is not permitted without permission.
