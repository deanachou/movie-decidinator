# movie-decidinator

The Movie Decidinator helps eliminate decision paralysis or conflicts when choosing what to watch on Netflix. Currently tailored for users located in Japan and the USA, a short quiz will return 3 movie/show recommendations (Poster, title, synopsis) for you to watch.


## Tech Stack

- Project Structure: Monolith/ MVC
- Programming Language: JavaScript
- Frontend Library: React
- Backend Framework: Node.js
- Database: PostgreSQL
- Styling: CSS
- Build Tools: Vite

## Installation

- Prerequisites: uNoGS API Key to fetch Netflix data
- Subscribe to the API via RapidAPI to get a personalized key
- Install dependencies
  - Server: `npm install`
  - Client: `npm install`
- Change `env.example` to `.env` and replace the placeholders

- Development:
  - Server: `npm run dev`
  - Client: `npm run dev`

## Future Features

-**Personalization** Users will be able to have their own profile to save preferences, keep track of already-watched content so they won't return in search results, and access their own search history.

-**More detailed results** Results may include the IMDB rating, runtime, year published, video of the trailer, etc.

-**Refresh results** Get a new set of results as needed.

-**Improved styling**


## Acknowledgments

Special thanks to everybody at Code Chrysalis in CC 34 and

- **[Manu] (https://github.com/lmanul)**
- **[Chad](https://github.com/chadgrover)**
- **[Michael] (https://github.com/vyridian17)**

You have not only helped us solve difficult problems but also challenged us to aim higher to achieve more than we could have thought.

### Contributors

- **[Deana](https://github.com/deanachou)**


### Libraries and Packages

This project wouldn't be possible without the following open-source libraries and packages:

- **[cors](https://github.com/expressjs/cors)** - A Node.js package for providing a Connect/Express middleware for handling CORS
- **[dotenv](https://github.com/motdotla/dotenv)** - A zero-dependency module for loading environment variables from a `.env` file
- **[express](https://expressjs.com/)** - A fast and minimalist web application framework for Node.js
- **[knex](https://knexjs.org/)** - A SQL query builder for JavaScript
- **[nodemon](https://nodemon.io/)** - A tool that automatically restarts the Node.js application when file changes are detected
- **[pg](https://node-postgres.com/)** - A non-blocking PostgreSQL client for Node.js
- **[react](https://reactjs.org/)** - A JavaScript library for building user interfaces

### APIs

Netflix data is accessed from the following API:

- **[uNoGS](https://rapidapi.com/unogs/api/unogsng)** - A freemium unofficial Netflix API that allows searching for movies and series with multiple parameters.



