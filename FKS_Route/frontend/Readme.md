# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## npm install react-bootstrap bootstrap for bootstrap 
## npm i @google-pay/button-react
## npm install nodemailer
## npm i material-react-table
## npm i @tanstack/react-query
## npm install react-pdf
## npm i react-router-dom
## npm install bootstrap@5.3.3
## npm install @mui/material @emotion/react @emotion/styled
## npm install @mui/material @mui/styled-engine-sc styled-components
## npm install @mui/x-data-grid
## npm i material-react-table
<Table striped bordered hover>
         <thead>
            <tr>
                <th>id</th>
                <th>FirstName</th>
                <th>MiddelName</th>
                <th>LastName</th>
                <th>DateBirth</th>
                <th>Gender</th>
                <th>UserName</th>
                <th>DatePlace</th>
                <th>Email</th>
                <th>Pwd</th>
                <th>Address1</th>
                <th>MobileNo</th>
                <th>Address2</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>ChkValid</th>
            </tr>
         </thead>
         <tbody>
         {resUserRegData.map((resUserReg) => (
           <tr>
             <td>{resUserReg.id}</td>
            <td>{resUserReg.firstName}</td>
            <td>{resUserReg.middelName}</td>
            <td>{resUserReg.lastName}</td>
            <td>{resUserReg.dateBirth}</td>
            <td>{resUserReg.gender}</td>
            <td>{resUserReg.userName}</td>
            <td>{resUserReg.datePlace}</td>
            <td>{resUserReg.email}</td>
            <td>{resUserReg.pwd}</td>
            <td>{resUserReg.address1}</td>
            <td>{resUserReg.mobileNo}</td>
            <td>{resUserReg.address2}</td>
            <td>{resUserReg.city}</td>
            <td>{resUserReg.state}</td>
            <td>{resUserReg.zip}</td>
            <td>{resUserReg.chkValid}</td>
          </tr>
        ))}
         </tbody>
      </Table>