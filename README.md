Massive Technical Test:

The ultimate goal was to demonstrate my understanding of web technologies and practices.

# Run instructions #
Use ```dotnet run``` in the root directory.
This will install the project dependencies and start the project on ```localhost:5000```.

## Context ##
"You did have all pieces in place to make it work, but it was hard for us to judge how well you understood each part and how they fit together in a good way."

This is a critique from my most recent technical challenge. I was tasked with developing an end to end solution, including UX, frontend, backend + database implementation for a planning poker application that was to update in real time. I completed the project and had a fully functional solution, but the front end (my area of expertise) was heavily compromised as I spent 85% of the time trying to figure out the areas I didn't know - the backend, database and hosting and real time client-side updates.

With this in mind I didn't want to repeat that mistake. I completely forwent developing a backend in favour of having a more feature complete frontend.

## Technologies ##
* React for the frontend.
  * I'm familiar with react and have a good understanding of the API, Routing and lifecycles. 
* React Router for authentication and routing.
  * Useful for managing routes and authentication with logging in.
* Reactstrap for modals
  * Instead of implementing modals from scratch, used boostrapped modals to save time.
* CSS. 
  * SCSS would have been nice, this was a time saving measure.
* Create-react-app with dotnet for boilerplate.
  * If I had finished off the frontend completely, I wanted a project where I could integrate a dotnet backend with minimal fuss. 
* SwaggerUI for API design
  * A simple way for me to communicate my API and design decisions.
* Dotnet core web api 
  * Web framework I would have used if I had the time.

## Nice to haves ##

* Proper validation for forms
* Proper user login with firebase.io or c#
  * Hashing passwords, https, jwt tokens etc (not storing passwords in plaintext in memory...)
* More modular and reusable react components.
  * Extensible / composable modals etc
* Unit testing with enzyme and jest
* Deployed to an online hosting service such as heroku
* Integrate with a proper backend, mongodb / mongoose ODM and hosted on the cloud with mlabs.
* Prop drilling
  * Some props (setUserAccount) propogated through far too many components, this can be solved by refactoring with the context api. 
* Spent more time prototyping a proper UI. 
* Learning c# would have been fun.

## Process ##
While I knew that I wouldn't be able to get everything done, my main priority was to demonstrate clean, readable and reusable code. 

The project was perfectly manageable, and i'm confident that if I had more time I would have been able to deliver a watertight solution. 


I started with the login page, mocking calls to display an incorrect login and a successful login so I wouldn't be blocked developing the user form page. 

Note - I had to put some backend logic into the frontend, such as associating a an ownership entity with the actual game entities.

I decided to keep the data and models in the front end and work with them as if I had made an API call. When I had the time to implement a backend I could just integrate the api calls. 

Built out the games component to map over the returned 'owned games' and display them in a mobile first manner.

Then moved onto the user section and developing the forms. I kept things as simple as possible, compromising on proper validation in favour of getting a use case working.
