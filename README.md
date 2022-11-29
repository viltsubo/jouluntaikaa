WHEN CREATING A NEW SERVER:

npm init -y
Change main in package.json from index.js to server.js (optional)

npm i express ejs express-ejs-layouts

(mongoose needs to be installed first from the web)
npm i mongoose

npm i --save-dev nodemon
In package.json change in scripts the "test" to "start": "node server.js" and also "devStart": "nodemon server.js"

npm i method-override
*in code*
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
Used to override POST method in HTML form from POST to either PUT or DELETE

I think you also have to do: npm i dotenv


To run the program: npm run devStart

ddd