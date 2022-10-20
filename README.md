# esm-express-sequelize 📂
A template to create projects with [Node](https://nodejs.org) (ESM - ECMAScript Modules), [Express](https://expressjs.com) and [Sequelize](https://sequelize.org).

## Table of Contents
* [Philosophy](#philosophy)
* [Folder and File Structure](#folder-and-file-structure)
* [Dependencies or Packages Used](#dependencies-or-packages-used)
* [Getting Started](#getting-started)
    * [Use this template](#use-this-template)
	* [Git](#git)
    * [Download ZIP](#download-zip)
* [Project Setup](#project-setup)
* [License](#license)

## Philosophy
The philosophy of this repository is to provide a template to create projects with node and save some time.

## Folder and File Structure
```
▽ 📁 node-project-structure
  ▽ 📁 database
    ▽ 📁 migrations
        📄 20220930205428-create-user.js
    ▽ 📁 seeders
        📄 20220930210121-user.js
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
        📄 favicon.ico
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
    📄 .sequelizerc
    📄 index.js
    📄 LICENSE
    📄 README.md
```

## Dependencies or Packages Used

| Dependencie or Package                                       | Dev |
| ------------------------------------------------------------ | --- |
| [dotenv](https://www.npmjs.com/package/dotenv)               | No  |
| [express](https://www.npmjs.com/package/express)             | No  |
| [morgan](https://www.npmjs.com/package/morgan)               | No  |
| [sequelize](https://www.npmjs.com/package/sequelize)         | No  |
| [nodemon](https://www.npmjs.com/package/nodemon)             | Yes |
| [sequelize-cli](https://www.npmjs.com/package/sequelize-cli) | Yes |
> Remember to install the driver for the database of your choice, for [more info](https://sequelize.org).

## Getting Started
Use the option that suits you.

### Use this template
This repository is a template so you can use it by clicking on `Use this template` and following the steps.

### Git
Locate with the console in the directory where you want to clone the repository and execute the following:

Clone the `esm-express-sequelize` branch of the `Node Project Structure` repository:
```console
git clone --branch esm-express-sequelize https://github.com/santiagor0jas/node-project-structure.git
```

### Download Zip
Download the repository of this branch.

Visiting the following link:
```
https://github.com/santiagor0jas/node-project-structure/archive/refs/heads/esm-express-sequelize.zip
```
Or using the `Github Download Function`.

## Project Setup

1. After cloning the repository, a folder named `node-project-structure` will be created in the selected directory, remember to rename this folder, for example `my-app`.
	> **Please note that** if your project needs to be licensed, modify the `my-app/LICENSE` file, otherwise delete it.

2. Now go to the `my-app` folder using the console and run the following to configure git to point to your repository.
	```console
	git remote set-url origin <repository-url>
	```

3. Initialize project:

	> It is recommended to set git to point to your repository before running this command.

	```console
	npm init -y
	```

4. Install dependencies
	```console
	npm install express sequelize dotenv morgan 
	```
	> Remember to install the driver for the database of your choice, for [more info](https://sequelize.org).

5. Install development dependencies
	```console
	npm install -D sequelize-cli nodemon
	```

## License
This project is licensed under the [MIT License](./LICENSE).
