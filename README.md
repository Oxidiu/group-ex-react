# Getting started:
Fork, then clone this repository and run

    npm install

Inside the repository.

Run:

    npm run dev

This will start your react app.
React app will run on **localhost:3000**.

## Start editing the **src/app.jsx** file.

Make it so the text is rendered in an input tag, and whenever we edit that text, it also updates the "items".

To do this, we pass the index of our item in the card component, and a callback function defined in the App component, that will update the items array every time we call it.

For the input tag, use the "value" property to set the value for the text we get in the content prop.

Add a Delete Me button in the Card Component, that when clicked will delete that item from the list.

For this we also have to pass an index to the Card Component, and a deleteCallback that will delete an item from the items array.
Make it so this updates the "items" state variable, and update that variable so that it re-renders our list of cards, with the proper card updated.

