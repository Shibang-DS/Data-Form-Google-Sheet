# Deployed Link - https://data-form-google-sheet.vercel.app/
# Google Sheet Link - https://docs.google.com/spreadsheets/d/1VapHovBWX465rAr-R6IlcHH44kuHUn5Zs_ag12BW_o0/edit#gid=0


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Once We Clone the Repository, we have to run the following commands ->

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This function creates a compact folders of all the essential part of the application so that it can be deployed. 


# Steps to integrate Google Sheets with React.js using Google App Scripts
Integrating Google Sheets with a React.js application using Google Apps Script involves creating an Apps Script project to act as an intermediary between our React.js front end and the Google Sheets backend. This allows our React.js application to send data to Google Sheets for storage and retrieval. Here are the steps to achieve this integration:

1. Create a new Google Sheets document or open an existing one.
2. Set up the sheet with the necessary columns to store your data.
3. Go to the Google Apps Script website.
4. Create a new project and give it a name.
5. Write the Apps Script code to handle incoming HTTP requests and interact with Google Sheets.
6. Deploy your Apps Script project as a web app to obtain a URL that your React.js application can send requests to.
7. Choose "Web App" as the deployment type and configure settings like access permissions.
8. Deploy the web app and note down the URL generated.
9. Create a new React.js application or use an existing one and fetch the api from Google Sheet backend.
10. Now after fixing the CORS issue, we can create the frontend and retrieve the data written in the app directly from google sheet.
