[![coverage](https://codecov.io/gh/Dj-Viking/LED-Art-matrix/branch/main/graph/badge.svg?token=6KIXEPI5DA)](https://codecov.io/gh/Dj-Viking/LED-Art-matrix)

# LED Art matrix

![screenshot](./led-matrix-gif.gif)

Check it out here! 👇

[![Deployed_on: Heroku](https://img.shields.io/badge/Deployed_on-Heroku-480087.svg)](https://led-matrices.herokuapp.com/)


[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) 

## Description 

An LED Art Matrix with user interactability to maximize the audio visual experience of controlling an LED matrix and Art Scroller.

## Table of Contents
* [Installation](#installation)
* [LocalSetup](#running-locally)
* [Credits](#credits)
* [HowToContribute](#contribute)
* [ContributionNotes](#contribution-notes)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)

## Installation

PWA accessible! just install by clicking the + on the right side of the browser URL! can store on your phone, desktop computer, or android. 


## Credits

* Anders Ackerman
* My Three Cats!

---
## Contribute

* Running Locally
    - 
    - must first <a href="https://www.mongodb.com/docs/manual/administration/install-community/" rel="noopener noreferrer" target="_blank">install mongodb</a> on your local machine for the server to save it's data
    ```sh
        git clone "git@github.com:Dj-Viking/LED-Art-matrix.git"; \
        cd LED-Art-matrix/; \
        npm install --verbose; \
        npm start;
    ```
    - you should at least have the client webpack dev server start and the server will crash without env.txt file. the client doesn't NEED the server just to play around with the LED controls. But for the purposes of using the art scroller and saving LED pattern presets the server needs to work to save user data.
    - ![asdf](./docs/images/start-after-clone.png)
    ## env.txt 
    - have an env.txt file created in the root of project, and one in the server folder. This is for the purpose of allowing server tests to run, regarding password hashing salts and token secrets
    - ```API_KEY='your-giphy-api-key'```
        * allows the app to use giphy api to get the layering gifs activated in the client app art scroller feature.
    - ```SECRET='whatever_you_want_here_definitely_gitignore_this_file!!!'```
        * for use in creating/verifying JWT tokens. 
    - ```EXPIRATION='1h'```
        * time for the login JWT token to expire before user needs to login again or keep navigating pages to refresh the token
    - ```EXPIRED_TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb21lVXVpZCI6IjcxNmYzMzJlLTMxODQtNDJmMC04Y2I3LTRjOWNlNmJmODdkOCIsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiZW1haWwiOiJ0ZXN0QGVtYWlsLmNvbSIsIl9pZCI6IjYxZTIxMzgwNTdjOTc4NGYyNDllNjIzNSIsImlhdCI6MTY0MjIwNjA4MCwiZXhwIjoxNjQyMjA5NjgwfQ.kShMP7vYDqYvw-raT1WUq1_XVD4LgU9YsJBZ_8qAqpM'```
        * expired JWT token for the purpose of testing
    - ```INVALID_SIGNATURE='eyJfsdhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb21lVXVpZCI6IjcxNmYzMzJlLTMxODQtNDJmMC04Y2I3LTRjOWNlNmJmODdkOCIsInVzZXJuYW1lIjoidGVzdC11c2VyIiwiZW1haWwiOiJ0ZXN0QGVtYWlsLmNvbSIsIl9pZCI6IjYxZTIxMzgwNTdjOTc4NGYyNDllNjIzNSIsImlhdCI6MTY0MjIwNjA4MCwiZXhwIjoxNjQyMjA5NjgwfQ.kShMP7vYDqYvw-raT1WUq1_XVD4LgU9YsJBZ_8qAqpM'```
        * invalid JWT token signature for the purpose of testing
    - ```SALT='10'```
        * read about bcrypt password hashing <a href="https://stackoverflow.com/questions/46693430/what-are-salt-rounds-and-how-are-salts-stored-in-bcrypt" target="_blank">salt rounds</a>
    - ```RESET_EXPIRATION='5m'```
        * the expiration time for the reset password email token to expire before the user has to make a new password reset request
    - ```NODEMAILER_AUTH_EMAIL='<REDACTED>'```
    - ```NODEMAILER_AUTH_PASS='<REDACTED>'```
    - ```OTHER_NODEMAILER_AUTH_PASS='<REDACTED>'```

    ## How env.txt works
    * if the env.txt file is there the values will be inherited to the process.env object
    * this is my way around having to install dotenv all the time works for me as a mac user, not 100% sure about other operating systems

    ```sh
    # from ./server/package.json
    # storing into a temporary process environment variable called ENV_TXT with the value of the result of `cat env.txt` 
    # in the context of running the node_module jest process from package.json
    # this string value of the text file is stored into the process.env.ENV_TXT property to be parsed later by readEnv()
        ENV_TXT=$(cat env.txt) jest --verbose --detectOpenHandles --watchAll=false
    ```
    ```ts
    //from readEnv.ts
        export function readEnv(): void {
            let entries = {} as Record<string, string>;
            let env;
            if (typeof process.env.ENV_TXT !== "undefined") {
                env = process.env.ENV_TXT.split("\n") as string[];
                for (let i = 0; i < env.length; i++) {
                    entries = {
                        ...entries,
                        [env[i].split("=")[0]]: env[i].split("=")[1].replace(/'/g, ""),
                    };
                }
                process.env = {
                    ...process.env,
                    ...entries,
                };
            }
        }
    ```
    * NOTE: how the env.txt has '' single quotes around the right side of equal side EXAMPLE='somevalue'
    * this is an important part of the parsing as this is what the regex is replacing when creating the entries object to spread into the process.env object
    * otherwise the values will not be correct while the entire program starts and tries to access these values from the process.env


    ## NodeMailer
    - Not completely necessary for local setup, but if you want to test it yourself, you'll need to set up a gmail account that has app access rights to allow code executed inside nodejs to use a particular email to transport a message to the user's entered email. Which allows the user a short period of time to reset their password.
    - the jest test for this email feature has a mocked function that does not send the email during the server test. 

    ## Testing
    ```sh
    # working directory should be the root folder of project
    npm test
    ```
    - must have env.txt created and located in the right directories for the server tests to pass. the client tests should be self contained
    - If anybody knows a better way to do dependency injection for the MIDI controller testing I am looking for some help on this!
    - You can see the istanbul code coverage report by going into the coverage folders inside server and client folders to see line coverage.
        * ![coverage](./docs//images/coverage.png)
    

    ## Contribution Notes
    - If anybody would like to contribute please fork the repo and submit a pull request or open any issues that anyone has that would like to improve on or add! Thanks 👍 Dont be afraid to reach out to my email! 😁


## License

LED Art matrix is licensed under the MIT license.

## Questions

If anybody has any questions please reach out to the creator of the project - Anders Ackerman via:
* Email: anders.swedishviking@gmail.com
* GitHub: (https://github.com/dj-viking)
