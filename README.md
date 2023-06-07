# Getting started:
Fork, then clone this repository and run

    npm install

Inside the repository.

Run:

    npm run dev

This will start your react app.
React app will run on **localhost:3000**.

## Start editing the **src/app.jsx** file.

<!-- Modify the existing code to store the "items" array in the browser's localStorage. This way, even if the user refreshes the page, the list of items will persist. -->


<!-- 1. In the App component, add a `useEffect` hook to save the "items" array to localStorage whenever it changes. Use the `localStorage.setItem()` method to store the array. The "items" array should be converted to a string using `JSON.stringify()` before storing it. -->

<!-- 2. In the App component, add code to retrieve the "items" array from localStorage when the component mounts. Use the `localStorage.getItem()` method to retrieve the stored string and convert it back to an array using `JSON.parse()`. If there are no stored items, initialize the "items" state variable with an empty array. -->

<!-- 3. Modify the code in the "Add item" button's click handler to add the new item to the "items" array and update the localStorage. After adding the new item, call `localStorage.setItem()` to store the updated "items" array. -->

<!-- 4. Modify the deleteCallback function in the App component to remove the item from the "items" array and update the localStorage. After removing the item, call `localStorage.setItem()` to store the updated "items" array. -->


