# Contact App

This is a simple contact management application built using React, Vite, Formik, Chakra UI, React Toastify, and Firebase. It allows users to add, update, delete, and search contacts.

## Features

- **Add Contact:** Users can add new contacts with their name, email, phone number, and other relevant information.
- **Update Contact:** Users can update existing contacts with updated information.
- **Delete Contact:** Users can delete contacts they no longer need.
- **Search Contact:** Users can search for contacts by name, email, or phone number.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Formik**: A popular form library for React that helps in managing form state and validation.
- **Chakra UI**: A simple, modular, and accessible component library for React.
- **React Toastify**: A library for creating toast notifications in React applications.
- **Firebase**: A platform developed by Google for creating mobile and web applications.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd contact-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Firebase configuration:

   ```env
   REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
   REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
   REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
   REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
   REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

Follow the documentation of your chosen hosting platform for deployment instructions.
