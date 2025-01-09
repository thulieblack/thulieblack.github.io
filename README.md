## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```
### Docker Commands

```
1) BUILD IMAGE : docker build -t portfolio:latest
2) RUN IMAGE: docker run -t -p 3000:3000 portfolio:latest
```


## How To Use 

From your command line, clone and run your portfolio:

```bash
# Clone this repository
git clone https://github.com/thulieblack/portfolio.git

# Go into the repository
cd portfolio

# Setup default environment variables

# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
```

## Linking With GitHub

Inside the .env file, add key `REACT_APP_GITHUB_TOKEN` and assign your GitHub token like this, also add your username as `GITHUB_USERNAME`

```env
// .env
REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
GITHUB_USERNAME = "YOUR GITHUB USERNAME"
USE_GITHUB_DATA = "true"
```

Your website should run locally with no errors, feel free to use this as a template and make changes into it for your own Portfolio.

Feel free to raise issues if you find any bugs in the site.

> Credit: Template originally by [DeveloperFolio](https://github.com/saadpasta/developerFolio)