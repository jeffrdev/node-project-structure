# Node Project Structure :open_file_folder:
A directory structure for projects with [Node](https://nodejs.org).

## Table of Contents
* [Philosophy](#philosophy)
* [Folder and file structure](#folder-and-file-structure)
* [Use](#use)
* [License](#license)

## Philosophy
The philosophy of this repository is to provide a basic directory structure for creating projects with node and save some time.

## Folder and file structure
```
▽ 📁 node-project-structure
    ▽ 📁 src
        ▽ 📁 app
            ▽ 📁 Controllers
                📄 UserController.js
            ▽ 📁 Helpers
                📄 Jwt.js
            ▽ 📁 Middleware
                📄 VerifyToken.js
            ▽ 📁 Models
                📄 User.js
            ▽ 📁 Services
                📄 UserService.js
            ▽ 📁 config
                📄 database.js
            ▽ 📁 public
                📄 robots.txt
        ▽ 📁 routes
            📄 api.js
        ▽ 📁 views
            📄 index.ejs
          📄 app.js
    ▽ 📁 tests
        📄 user.test.js
      📄 .env
      📄 .env.example
      📄 .gitignore
      📄 index.js
      📄 README.md
```
The files found in each folder were created so that the folders were uploaded to the repository.

## Use
To use the directory structure for your project, clone the `Node Project Structure` repository:

```console
git clone https://github.com/santiagor0jas/node-project-structure.git
```

Remember to rename the `node-project-structure` folder to whatever name you want and configure git to point to your repository.

## License
MIT License
