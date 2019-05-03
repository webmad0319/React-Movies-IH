# React-Movies
Create an application to display and create movies from scratch interconnecting both a front end based on React and a back end based on Express.

##   Requirements

-   Fork this repo https://github.com/webmad0319/React-Movies-IH
-   Clone the forked repo

## Submission

-   Upon completion, run the following commands:
    
    ```
    git add .
    git commit -m "done"
    git push origin master
    
    ```
    
-   Create Pull Request so your TAs can check up your work.

##  Setup

After cloning the repo, you have to create 2 separate folders. One will be your client and the other one your server using the following commands:

    create-react-app client
    irongenerate server

We left you a seed.js file so that you can create your local database of movies.  You have to move the file seed.js to server/ bin.

## Introduction

  The endpoints you have to create for your application are the following:

    Method    Endpoint     Action
    GET       /all          Get all the movies from the DB
    GET       /one/:id      Get the a specific movie 
    POST      /new          Create a new movie
    DELETE    /delete       Delete a movie
    UPDATE    /update       Update a movie 


The  **React-Movies**  project will include the following fixed elements:

-   A  **Navigation**  feature that will provide you with links to navigate across sections.

-   A  **Footer**  feature that will show copyright info.

The project will contain the following sections:

-   A  **Home**  page that will display all the movies available in the database and an Add new movie button.

-   A  **Single Movie**  page containing  the details of the movies the user clicked on and two buttons. The first one allows the user to update the movie and the other one to delete that movie (consider using a trash bin icon). To update the movie, display a form inside another view of the same section component and once updated or deleted, you should redirect the user to the **List Movies** .
-   A  **New Movie**  page to show a form where a user can create new movies. This will redirect to its specific single movie page.


## Iteration 1

First, we start preparing our back end.
Change the port to `PORT=5000` in your .env file.
Remember! inside the server folder you have to install and configure CORS to allow communication between client and server.
 
    npm install cors
    const  cors  =  require("cors") // Require cors in your app.js file
    app.use(cors())                 // Configure middleware   
  
You now have to find your way to import the `seed.js` file into your DB. Good luck!

## Iteration 2

Start creating your routes in your back-end for all the possible endpoints (Display all / display one / update / delete / add). Remember you can test out your endpoints using a tool like Postman.


## Iteration 3

Interconnect your front-end and your back-end and start creating your views and react routes.


### (Extra) Bonus Iteration: Sort the Movies

On the  `/all`  route,  add filters to sort the movies by rate, genre, duration, year.

**We are done!**  ![trophy](https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png)


Happy coding!  ![heart](https://github.githubassets.com/images/icons/emoji/unicode/2764.png)