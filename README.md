# Hephaestus or The Generic Repositories Hub 

Hephaestus is the Greek god of artisans and craftsmen and The Generic Repositories Hub is a web app that enables the user to look up any registered user on GitHub and browse through any and all their public repositories.

The [official GitHub API](https://docs.github.com/en/rest) is used to fetch the user data displayed.

The user is also able to filter through the different repositories with the help of the filter bar.

Built using Typescript, ReactJS, Bootstrap, Sass and Storybook. Deployed using Netlify.
## How to run

You check out the app deployed online by clicking the following link.

https://hephaestus-07.netlify.app

**OR**

Clone the repository in the method that you prefer.

You run the following git command in the terminal of your IDE of choice.

```node
git clone https://github.com/Johni-Bahous/Generic-Repositories-Hub.git
```

After a successful cloning, in the terminal of the IDE, install all of the project's dependencies by running the following command.

```node
npm install
```

And then in order to run the app, simply run this command.

```node
npm run dev
```

Copy or follow the localhost link that appears and follow the on-screen directions.

## Future Improvements

* One major improvement would be to take advantage of the [v4 of the GitHub API](https://docs.github.com/en/graphql) as this version of the API is built using GraphQL which in turn would allow for cleaner and leaner responses.


* While the aim is to keep this app as lightweight as possible, the use of other JavaScript libraries such as this [date utility library](https://date-fns.org/) (in order to better display dates in Profile or Repos), would improve the user experience even if by the slightest margins.

* Other imporvments would have to do with further polishing the app be it improving the performance (Using UseMemo for example) or improving the app stylistically and ensuring every element of the app is as responsive as it can get.