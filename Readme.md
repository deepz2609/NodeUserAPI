

# User Management API

This project is a simple User Management API built using Node.js and Express.js. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on a collection of user data. Users are stored in a JSON file, and the API provides endpoints to interact with this user data.

## Features

- **Retrieve Users:** List all users or retrieve a specific user by ID or first name.
- **Add User:** Add a new user to the system.
- **Update User:** Modify user information, such as name, email, gender, and job title.
- **Delete User:** Remove a user from the system.

## Technologies Used

- **Node.js:** A JavaScript runtime for server-side development.
- **Express.js:** A web application framework for Node.js that simplifies the creation of robust APIs.
- **File System (fs) Module:** Used for reading and writing user data to a JSON file.

## Getting Started

To run this project locally, follow these steps:

1. Install Node.js and npm.
2. Clone the repository.
3. Run `npm install` to install project dependencies.
4. Start the server using `npm start`.

## API Endpoints

### `GET /api/users`

Retrieve a list of all users.

### `GET /api/users/:id`

Retrieve a user by ID.

### `GET /api/users/byName/:name`

Retrieve a user by first name.

### `POST /api/users`

Add a new user.

### `DELETE /api/users/:id`

Delete a user by ID.

### `PATCH /api/users/:id`

Update a user's information by ID.

## Usage Example

```javascript
// Example: Add a new user
const newUser = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@example.com',
  gender: 'Male',
  job_title: 'Software Developer',
};

// Make a POST request to create a new user
// ...

// Example: Retrieve all users
// Make a GET request to retrieve all users
// ...
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the Node.js and Express.js communities for providing excellent tools and resources.

---

