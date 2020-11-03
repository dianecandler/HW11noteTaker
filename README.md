# Express: Note Taker

***Here is a tool to help you stay organized - write, save, delete notes!***

This application uses an express backend, saving and retrieving JSON stored data.
* HTML routes were created:
  * GET `/notes` - return the `notes.html` file.
  * GET `*` - return the `index.html` file
* `db.json` file on the backend is used to store and retrieve notes using the `fs` module.
* API routes were created:
  * GET `/api/notes` reads `db.json` file and returns all saved notes as JSON.
  * POST `/api/notes` receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.
  * DELETE `/api/notes/:id` receives a query parameter containing the id of a note to delete. Each note is given a unique `id` when it's saved. 
    * To delete a note . . .
      1. read all notes from the `db.json` file
      2. remove the note with the given `id` property
      3. rewrite the notes to the `db.json` file

## User Story

AS A user, I want to be able to write and save notes
I WANT to be able to delete notes I've written before
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Deploying the App

Deploy the server side code on GitHub pages. This app is deployed on Heroku. [Heroku Guide](../04-Supplemental/HerokuGuide.md).

