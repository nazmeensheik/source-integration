
# Secure Application Integration

A responsive internship portal front-end built using HTML, CSS and JavaScript.

## Features

- Displays internship opportunities.
- Lets users select an internship.
- Provides an application form.
- Checks required fields and input lengths.
- Shows loading, success and error messages.
- Includes a retry control.
- Uses DOM methods and textContent to display user-facing text safely.
- Supports keyboard focus and mobile screens.
- Requires no npm packages or external frameworks.

## Technologies

- HTML5
- CSS3
- JavaScript

## Project Files

- index.html
- style.css
- script.js
- README.md

## How to Run

1. Open the project folder in VS Code.
2. Open index.html in a browser.
3. Select an internship and test the form.
4. Try submitting empty or invalid fields to test validation.

## Security Notes

This is a front-end demonstration. Browser-side validation can be bypassed and does not secure an API.

A production implementation must use a backend to:
- Validate all submitted fields again on the server.
- Use parameterized database queries.
- Apply rate limits.
- Use HTTPS and appropriate security headers.
- Handle API errors and avoid exposing sensitive information.
- Add automated tests for validation and security.

## Current Limitations

This demo does not connect to a real API or database. It does not send or persist applications. Server-side validation, rate limiting, secure headers and integration tests remain to be implemented.

## Author

Nazmeen