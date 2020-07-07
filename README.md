# Homework 11 - Express: Note Taker

## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The application frontend was provided and used build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes were created:

  * GET `/api/notes` reads `db.json` file and returns all saved notes as JSON.

  * POST `/api/notes` receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.

  * DELETE `/api/notes/:id` receives a query parameter containing the id of a note to delete. Each note is given a unique `id` when it's saved. To delete a note, it is necessary to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrites the notes to the `db.json` file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

Application allows users to create and save notes.

Application allows users to view previously saved notes.

Application allows users to delete previously saved notes.

## Deploying the App

Deploy the server side code on GitHub pages. This app is deployed on Heroku. [Heroku Guide](../04-Supplemental/HerokuGuide.md).

