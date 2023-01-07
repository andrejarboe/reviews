# Reviews

[View Live Site](https://www.reviews.andrejarboe.com)

A simple React application that displays a list of reviews. The user can navigate through the list by clicking the `prev` and `next` buttons, or can shuffle through the list randomly by clicking the `surprise me` button.

## Components

### App.js

The `App` component is the root component of the application and is responsible for rendering the main layout of the page. It contains a `section` element with a class of `container`, which is used to wrap the `Review` component.

### Review.js

The `Review` component is responsible for displaying a single review. It uses the `useState` hook to manage the current index of the review being displayed. The component also contains several functions for navigating through the list of reviews:

- `prevPerson`: decrements the current index by 1 and sets the new index using `setIndex`.
- `nextPerson`: increments the current index by 1 and sets the new index using `setIndex`.
- `randomPerson`: generates a random number between 0 and the length of the `people` array (excluding the length), and sets the new index using `setIndex`.