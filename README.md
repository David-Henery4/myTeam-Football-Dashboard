![myTeam-Logo](/images/football-logo.svg)

# myTeam

"myTeam is a football data dashboard."

**Version 1.0.0**

This is a dashboard style site for people to check for basic information about a football team.

Although it is a dashboard, it is still fully responsive and will work for users on all screen sizes.

## Features

myTeam also contains a couple of extra features for users to check for more information about their team. These features are:

- Team History section where users can read a brief description of their club and history.

- Fixtures section where users can see the teams current seasons fixtures and results.

- Next game prediction enables users to read prediction data and compares their teams stats against the opposing teams stats and gives them a prediction of their teams next game.

- Also includes a dark/light mode toggle for users to select which themes suit them the most.

## How to use?

To get started just follow the link below and search for a team in the search bar you want to see stats for.

![search-gif](/readme-images/myTeam%20Football%20Dashboard.gif)

To use any of the features just click any one of the tabs on the left side for the one you want to see.

![features-gif](/readme-images/myTeam%20Football%20Dashboard-features.gif)

If you want to change the colour theme, its as easy as a click of a button. Which is located in the top right corner.

![theme-gif](/readme-images/myTeam%20Football%20Dashboard-themes.gif)

## Technologies that were used

The main technologies used to create this were **HTML**, **Scss** & **Javascript**.
I also used **parcel** as my bundler in order to compile everything together for the final version.
**Git** was used for version control thoughout the building of the project. Aswell as being connected to gitHub for a online intergration with the repo.

**core.js** & **regenerator-runtime** were used for polyfilling and ensuring that all modern features used will be backwards compatiable and work on older browsers.

I also used npm to install and use **Chart.js**. This was used in order to render some of the data to the pie charts & the radar charts and display the data in a clean and more visual way.

### APIs used

I had to use two different API providers in order to get the data needed, these were provided by:

* www.api-football.com
* www.mediawiki.org/wiki/API:Main_page

**api-football** was the main API that was used to fetch the majority of the data needed for the project.

While the **Wikipedia** API was only used to fetch the data for the team description in the history section.

## Improvements to be made

There are a few improvements and issues that will be added & solved in the near future.

* Replace the static theme button with an active toggle to give it more life.

* Get a better stadium image for the history section as the one provided by the api seems to be low quality and a bit dated.

* Possibly add a favourite teams feature where users can select and store there favourites they can come back to.

* Fix the theme button lighting issue, where the button elements outline lights up when switching between themes.

## What did i learn?

One of the main things i learned from building this project was the conecpt of chaining function return values with other function return values. This allowed me to constantly update the main state object with the data that was being returned by the fetch functions one by one as there were being returned. Which means we were able to send all of the data together back to the first function as its return value, which we could then distribute to the UI all at once.

This was also my first time using alot of data, fetched from a API all at once and in hindsight, if i were to do things differently, i would split the fetch functions and the data handling functions into their own seperate modules because at the moment the module has become to large and this has affected the readability of the module. This is something i will come back to and refactor in the future.