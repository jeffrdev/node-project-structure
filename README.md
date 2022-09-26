# Node Project Structure :open_file_folder:
A directory structure for projects with [Node](https://nodejs.org).

## Table of Contents
* [Philosophy](#philosophy)
* [Folder and file structure](#folder-and-file-structure)
* [Use](#use)
	* [Cloning the repository with git](#cloning-the-repository-with-git)
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
      📄 LICENSE
      📄 README.md
```
The files found in each folder were created so that the folders were uploaded to the repository.

## Use
Steps to use the folder structure for your project:

### Cloning the repository with git
Locate yourself with the console in the directory where you want to clone the repository.

1. Clone the `Node Project Structure` repository:

	```console
	git clone https://github.com/santiagor0jas/node-project-structure.git
	```

2. After cloning the repository, a folder named `node-project-structure` will be created in the selected directory, remember to rename this folder, for example `my-app`.

3. If your project needs to be licensed, modify the LICENSE file, otherwise delete it.

4. Now set git to point to your repository:

```console
cd my-app
git remote add origin https://github.com/yourusername/your-project.git
```

5. Commit and push to origin to save the folder structure in your repository (Optional):

  ```console
	git add .
	git commit -m "folder structure created"
	git push -u origin master or main
  ```

## License
This project is licensed under the [MIT License](./LICENSE).
