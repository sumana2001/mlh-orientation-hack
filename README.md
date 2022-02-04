<h1 align='center'> GitHub Stars✨</h1>
<p align='center'>
<img src='http://ForTheBadge.com/images/badges/built-by-developers.svg'>&nbsp;<img src='http://ForTheBadge.com/images/badges/built-with-love.svg'>
</p>

![Screenshot 2022-02-04 at 12 51 25 PM](https://user-images.githubusercontent.com/63084088/152488382-137ef28b-ae41-4586-9f07-8d3a9bd8b09b.png)

## Inspiration ⚡
'Stargazers' are a public list of GitHub users that have starred (essentially bookmarked) your repository and is a rough indicator of engagement. People either want to use your code or at least not forget the link to follow up on it another time. It is a good measure to see how useful or inspiring your project is. We wanted users to get their due appreciation and be able to see everyone who has contributed to their reach by starring the repository.

## What it does❓
GitHub Stars is a web application that allows GitHub users to enter their Github repository link and view the people who have starred their projects. You can also see the number of total stargazers, along with a link to each stargazers' profile. Since the number of stargazers can be infinite, we display only the profiles of the first 100 stargazers in alphabetical order.

## How we built it 👷‍♀️
We used Next.js as the Frontend Framework of our web application and we used Typescript. We also used Github Graphql API in place of REST API to learn more about the GraphQL ecosystem and technology. Then, we made use of Apollo Client as the library to enable us easily interact with Github GraphQL API. We had to obtain a Github personal access token to make use of the Github GraphQL API.

## Prerequisites🧑🏻‍💻

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install The `create-next-app` Package
Open your Terminal to install the `create-next-app` npm package globally on your local machine. The `create-next-app` package enables you to run the project and build the source files. To install the `create-next-app` package, run the following command:

```bash
npm install -g create-next-app
```
## Steps for Cloning and Running the Application locally 💻

- **Clone the project**: <br>
Run the following command in your terminal to clone the project locally:
```bash
git clone https://github.com/sumana2001/mlh-orientation-hack.git
```
- **Install all the packages**: <br>
After cloning the project, it should be saved in your Local Machine. Next, Open your terminal and `cd` (Change Directory) into the project's directory in your Local Machine. Then, type the following command to install all the packages needed for the application to run:

```bash
yarn
```

- **Connect to Github GraphQL API**: <br>
Generate a <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">personal access token</a> on GitHub. Create a file `.env` in the root of your project and add the personal access token in it:
```bash
NEXT_PUBLIC_TOKEN="<personal access token>"
```

- **Run the development server**: <br>
Use the following command to run the development server:
```bash
npm run dev
# or
yarn dev
```
The Application Runs on localhost:3000

## Technologies Used ⚒️
- [ ] Nextjs 
- [ ] Typescript
- [ ] GraphQL
- [ ] Github API
- [ ] Apollo Client 

## Team 💕
<table>
  <tr>
    <td align="center"><a href="https://github.com/sammychinedu2ky"><img src="https://avatars.githubusercontent.com/u/36219292?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Samson Amaugo</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/sumana2001"><img src="https://avatars.githubusercontent.com/u/63084088?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sumana Basu</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/debemenitammy"><img src="https://avatars.githubusercontent.com/u/43294761?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Deborah Emeni</b></sub></a><br /></td>
</table>

## Challenges we ran into 🥺  
As we were using so many new technologies together, it was very overwhelming at first to figure out what to learn first, how to structure the project and so on but as a team, we figured it all out. We also faced a lot of problems with the rate-limiting issue of the GitHub API. We then found a way to make the requests authorised and increase the rate limit to some extent. In addition to that, being a group of javascript developers, it was a bit difficult to start writing code in typescript but we worked hard and got the job done.

## Accomplishments that we're proud of 🥳
We were able to overcome all the challenges and were able to create a completely functional prototype. We were able to fetch the data from the GitHub user's repository and display it in an attractive UI as we had envisioned. We are most proud of the fact that we learnt so many new tech stacks in just a matter of a few days.

## What we learned 🧐
All the technologies, be it NextJs, GraphQL or Typescript, were very new to us. We learnt all three of them together while focusing on the core concepts of each technology. It was also our first time using the Github API. Since not many tutorials were present, we learnt the importance of documentation and how to use it efficiently. We have always used REST APIs to make API calls so trying out GraphQL was very fascinating and we really enjoyed using it.

## What's next for Github Stars 💫
Going ahead, the Github Stars will have a lot of new features like providing much more information regarding forks, deployments and so on of the repositories. We will also include a direct option of sharing the stars to various social media platforms like Twitter, LinkedIn and so on. Lastly, we also plan on creating a leaderboard that motivates the users to continue creating amazing projects.

## Important Links
- Live website: https://mlh-orientation-hack.vercel.app/
- Youtube link: https://youtu.be/Qm76tAKZcJo
