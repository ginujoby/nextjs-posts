#NextJS Posts App

##The Task
* Create a simple NextJS React App which should have the following pages
    1. Home page: Display a table containing select checkboxes, post title, and actions.
        - Clicking on the “Show” button on each row should redirect to a different page displaying details for that post.
        - Clicking on the “Delete” button on each row should delete that post.
        - Clicking on the “Show selected posts” button at the bottom of the table should redirect to a new page that should display all the selected posts.
        - Clicking on the checkbox inside the “Select” header should select all the individual checkboxes for each post.
        - Clicking on sort icons inside the “Post Title” header should sort rows alphabetically. Up icon - Ascending, Down icon - Descending.
        - Display only 20 posts in this table.
        - If time permits, please implement pagination with page size 20. This feature is not necessary so would be fine if not done.
        - Use your imagination for styles.
    2. Details page: Display a simple card or a list of cards based on the query string
        - Display card title and body for each post.
        - This page should display all the posts selected by the user on the main page
        - Refreshing this page should display one or more cards correctly.

##App Setup

###System Requirements:

- Node.js 12.0 or later

###Install dependencies and start the server:

```bash
npm install
npm run build
npm run start
```

###Tests:

```bash
npm run test:ci
```

