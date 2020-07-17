## How to contribute to **mathemagic**

There are many ways in which you can contribute to the **mathemagic** library. You can: 
- report any bugs to us by raising an [issue](https://github.com/matthewpeterbailey/mathemagic/issues)
- come up with new ideas by raising a [feature request](https://github.com/matthewpeterbailey/mathemagic/issues)
- or even contribute to the code.

### Contributing code
If you would like to contribute to the **mathemagic** code there are a few thing you should do: 
- First, you should fork the **mathemagic** repository
- Install dependencies by running
```
npm install
```
- Add a .gitignore file to the top level folder containing the following: 

```
.gitignore
node_modules
lib
```
- **mathemagic** is a typescript project containing the opinionated code linter **tslint** 
alongside the code formatting tool **prettier**. Linting will occur automatically when you
run the test script however, to manually run these tools use
```
npm run lint
and 
npm run format
``` 
- Only make changes in the */src/* and */tests/* folders
- Please write unit tests for any newly created methods using **jest** 
- Ensure that you run the test suite before opening a pull request using
```
npm test
```
- Send all pull requests to the `develop` branch
