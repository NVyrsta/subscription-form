# Subscription Form - Webinar Signup

This project is a subscription form designed for users to sign up for a webinar. It utilizes various technologies and libraries to provide a seamless and user-friendly experience.

## Technologies and Libraries Used

- React: A JavaScript library for building user interfaces. It enables the creation of reusable UI components and facilitates efficient rendering and updating of the application.
- EmailJS: A service that allows sending emails directly from the client-side code. It simplifies the process of integrating email functionality into the application.
- Formik: A form library for React that helps with form validation, handling form submission, and managing form state.
- Yup: A JavaScript library for schema validation. It is used in conjunction with Formik to define and validate the form's input fields.
- react-phone-number-input: A React component for entering and validating phone numbers. It provides a user-friendly phone number input field with built-in validation capabilities.
- libphonenumber-js: A JavaScript library for parsing, formatting, and validating international phone numbers. It is used in combination with react-phone-number-input to ensure the phone number entered by the user is valid.
- react-scripts: A set of scripts and configuration used by Create React App, which simplifies the setup and development process of React applications.
- react-dom: A package that serves as the entry point to the DOM and is required for rendering React components.

## Getting Started

To clone and run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/subscription-form.git`
2. Navigate to the project directory: `cd subscription-form`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run start`
5. Open your browser and visit `http://localhost:3000` to see the application running.

Make sure to run `npm install` to install all the required dependencies before starting the project.

## Project Structure

The project's file structure is organized as follows:

```
subscription-form/
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── src/
  │   ├── components/
  │   │   ├── Form.js
  │   │   └── ...
  │   ├── App.js
  │   ├── index.js
  │   └── ...
  ├── package.json
  ├── README.md
  └── ...
```

- The `public` directory contains the HTML file and any other static assets required for the application.
- The `src` directory is where the application's source code resides.
- The `components` directory holds reusable React components used in the form.
- The `App.js` file is the entry point of the application, rendering the main form component.
- The `index.js` file is responsible for rendering the React application into the DOM.

Feel free to explore the code and make any modifications according to your needs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgements

- This project was built using Create React App (https://create-react-app.dev/), which provides a solid foundation for React applications.
- The libraries and technologies used in this project are open-source and were developed by their respective authors and contributors.