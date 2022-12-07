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


====================================================


WHEN COPYING FROM WEB TO LOCAL MACHINE:

There isn't Node downloaded default (node_modules), so you have to do that manually. Type these in terminal

npm init -y
npm i express ejs express-ejs-layouts
npm i mongoose
npm i --save-dev nodemon
npm i method-override

Then create a .env file, and in that file type "DATABASE_URL=mongodb://localhost/authentication" (hanipallerot)

That should be it. If problems occur, in package.json change "test" to "start": "node server.js" and also "devStart": "nodemon server.js"


==================================================


DEPOLOYING ON HEROKU:

First you have to login on heroku with a command (after downloading heroku CLI) (https://www.youtube.com/watch?v=72DYDMP09MM didn't need the procfile file)
>> heroku login
>> heroku create <app name>

>> git add .
>> git commit -m "<message>"
>> (git push origin)
>> git push heroku master

Then it is needed to set the mongoose so that heroku can use it. Follow this tutorial (https://www.youtube.com/watch?v=imR9LlbG3pU). Got to mongo db atlas and create a new project.
In there, create a new cluster. Then click "connect" and choose the second one. Whitelist everyone, create a user. The copy the long string, change the <password> to match that
before generated password. Then copy that string on heroku project's setting tab, under the variables section. Create a key of DATABASE_URL and a value of the copied string.

Finally change the domain name following this tutorial (https://www.youtube.com/watch?v=NQP89ish9t8&list=LL&index=7) and this article (https://devcenter.heroku.com/articles/custom-domains)
and this tutorial (https://www.youtube.com/watch?v=xWyaV_ZtLS0). This (https://devcenter.heroku.com/articles/custom-domains#rules-on-adding-domains) link is also helpful.


==================================================


MONGOOSE:

Username: tjAdmin
Password: C4adYKo4lx9VLRh6
Connection string: mongodb+srv://tjAdmin:C4adYKo4lx9VLRh6@cluster0.03tcg2k.mongodb.net/?retryWrites=true&w=majority