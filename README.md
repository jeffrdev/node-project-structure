# Node Project Structure :open_file_folder:
A template for projects with [Node](https://nodejs.org), Express and Sequelize.

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
The philosophy of this repository is to provide a basic directory structure for creating projects with node and save some time.

## Folder and File Structure
```
▽ 📁 node-directory-structure
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
| [cross-env](https://www.npmjs.com/package/cross-env)         | No  |
| [dotenv](https://www.npmjs.com/package/dotenv)               | No  |
| [express](https://www.npmjs.com/package/express)             | No  |
| [morgan](https://www.npmjs.com/package/morgan)               | No  |
| [sequelize](https://www.npmjs.com/package/sequelize)         | No  |
| [nodemon](https://www.npmjs.com/package/nodemon)             | Yes |
| [sequelize-cli](https://www.npmjs.com/package/sequelize-cli) | Yes |
> Remember to install the driver for the database of your choice, for [more info](https://sequelize.org/docs/v6/getting-started)

## Getting Started
Use the option that suits you.

### Use this template
This repository is a template so you can use it by clicking on `Use this template` and following the steps.

### Git
Locate with the console in the directory where you want to clone the repository and follow these steps:

1. Clone the `Node Project Structure` repository:
	```console
	git clone https://github.com/santiagor0jas/node-project-structure.git
	```

2. After cloning the repository, a folder named `node-project-structure` will be created in the selected directory, remember to rename this folder, for example `my-app`.
	> **Please note that** if your project needs to be licensed, modify the `my-app/LICENSE` file, otherwise delete it.

3. Now set git to point to your repository:
	```console
	cd my-app
    git remote set-url origin <repository url>
	```

4. Commit and push to origin to save the folder structure in your repository (Optional):
	```console
	git add .
	git commit -m "folder structure created"
	git push -u origin <your branch>
	```

### Download Zip
Download the repository of this branch.

Visiting the following link:
```
https://github.com/santiagor0jas/node-directory-structure/archive/refs/heads/node-express-sequelize.zip
```
Or using the `Github Download Function`.

## Project Setup
After cloning or downloading the repository, go to the folder using the console and run the following commands:

1. Initialize project:

	> It is recommended to set git to point to your repository before running this command.
	
	```console
	npm init -y
	```

2. Install dependencies:

	```console
	npm install express sequelize morgan dotenv
	```

3. Install development dependencies:

	```console
	npm install -D sequelize-cli nodemon cross-env
	```

## License
This project is licensed under the [MIT License](./LICENSE).
