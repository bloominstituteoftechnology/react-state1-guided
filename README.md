# Advanced State Management Guided Project PART 1

## Requirements

- Node 16.x
- NPM 8.x (update NPM executing `npm i -g npm`)
- Postman (download the desktop version [here](https://www.postman.com/downloads/))
- Chrome >= 100.x

Other browser/Node/NPM configurations might work but haven't been tested.

## Set Up

- Clone and `npm install`. DO NOT FORK! (Or the "ketchup" script won't work.)
- Launch the project on a development server executing `npm run dev`.
- Visit your app by navigating to `http://localhost:3000` with Chrome.
- Reset to the instructor's remote branch executing `npm run ketchup`.

## Endpoints

The following endpoints exist in this project:

- `GET http://localhost:9000/api/todos`
  1. Expects no payload
  2. Makes no changes on the server
  3. responds with `200 OK` and a payload with all the todos
- `POST http://localhost:9000/api/todos`
  1. Expects a payload with `name` (string) and optional `completed` (boolean)
  2. Creates a new todo on the server
  3. responds with `201 Created` and a payload with the new todo
- `PATCH http://localhost:9000/api/todos/:id`
  1. Expects no payload
  2. Flips the `completed` property on the todo with the id provided in the URL
  3. Responds with `200 OK` and the updated todo

The API will make other responses if the requests are defective:

- `422 Unprocessable Entity` when a required payload is missing or incorrect
- `404 Not Found` when the requested todo does not exist, or when the URL is incorrect
