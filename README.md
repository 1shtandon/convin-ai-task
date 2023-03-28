
# Convin Frontend Task


This application allows users to create, delete, and edit cards containing video or mp3 links. Each card can be categorized under a bucket, which the user can name according to their preferences. Additionally, users can move cards from one bucket to another and keep track of the links they have played through a history tab.

## Getting Started
To use this application, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory and run npm install to install the required dependencies.
Run npm start to start the development server.
The application should now be running on http://localhost:3000/.

The site is also deployed on netlify. Link is given in the repository.

## Usage
Once you have the application running, you can use the following functionalities:
### Create/Edit/Delete Buckets
Buckets dropdown is provided as a sidebar. Adding, editing and deleting them is implemented there itself.

### Creating a card
To create a new card, click on the "Add Card" button. Fill in the required fields, including the card name, video/mp3 link, and the bucket. Click "Ok" to create the card.

### Editing a card
To edit an existing card, click on the card you want to edit. This will open a modal with the card's details. Edit the required fields and click "Ok" to save the changes.

### Deleting a card
To delete a card, click on the card you want to delete.

### Moving a card
This functionality is provided while editing card itself to move a card in any given bucket.

### Viewing history
To view your history, click on the "History" tab. This will display a list of all the links you have played, including the card name, link, and time played.

### Technologies Used
* React.js - A popular JavaScript library for building user interfaces.
* Ant Design (antd) - A UI library for React that provides pre-built components and styling.
* Redux - A predictable state container for JavaScript apps.
* Redux Thunk - A middleware for Redux that allows for asynchronous actions.

## Conclusion
This application provides a simple and efficient way to manage your video/mp3 links. Feel free to modify the application according to your preferences and needs. If you have any issues or suggestions, please submit them in the issues section of this repository.
