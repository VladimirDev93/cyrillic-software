# Front-end Developer test for Cyrillic Software (Vladimir Jovanovic)

# Meteor + React

# Install (Localy)

In order to run this app you need to have some prerequisites on your machine. The following are:
  - Node.js >= v8
  - Meteor 1.8+

Once you get those installed on your machine, you need to install the application. In order to do that, run the following command from within this folder:
```
npm i 
```
This will install all the necessary dependecies for the app in order to run successfully.

The last step you need to do is to decrypt the `settings.json.enc` file that contains the API key for the
OpenWeatherMap that is used to retrieve data for the desired city. 
To decrypt the file you will need a tool that can decrypt `AES-256` encryption. For example:
```
openssl aes-256-cbc -d -a -in settings.json.enc -out settings.json
```

# Install (Cloud)

The application can be deployed on Heroku with Meteor build pack. To deploy on Cloud hosting service like Heroku, follow [this guide]('https://medium.com/@leonardykris/how-to-run-a-meteor-js-application-on-heroku-in-10-steps-7aceb12de234').

I have deployed a working version on Heroku, which you can checkout [here]('https://cyrillic-software.herokuapp.com/').

The reason I deployed the app on Heroku is because AWS and Microsoft Azure require a credit card in order to sign up, 
which I don't currently have.

# Usage

After running the application, you will first see a welcoming screen on which you will have 2 options.
"Log in" or "Sign up".

You can create as many accounts as you wish and all of them are saving the search history in a personal document (MongoDB collection).

# Application philosophy

The only purpose of the application is to display the current weather conditions for a specific city from around the world. The user has to create an account and after creating the account, the user has the ability to search for any existing city from all over the world and get the current weather conditions for the city that was entered in the search query. 

Note that search queries **MUST** be on English.