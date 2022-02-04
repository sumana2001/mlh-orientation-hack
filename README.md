<h1 align='center'> GitHub Stars✨</h1>
<p align='center'>
<img src='http://ForTheBadge.com/images/badges/built-by-developers.svg'>&nbsp;<img src='http://ForTheBadge.com/images/badges/built-with-love.svg'>
</p>

![Screenshot 2022-02-04 at 12 51 25 PM](https://user-images.githubusercontent.com/63084088/152488382-137ef28b-ae41-4586-9f07-8d3a9bd8b09b.png)

## Inspiration ⚡

## What it does❓
GitHub Stars is a web application that allows GitHub users to enter their Github repository link and view the people who have starred their projects. You can also see the number of total stargazers, along with link to each stargazers's profile. Since the number of stargazers can be infinite, we display only the profiles of the first 100 stargazers in alphabetical order.

## How we built it 👷‍♀️
We used Next.js as the Frontend Framwework of our web application and we used Typescript. We also used Github Graphql API in place of REST API to learn more about the GraphQL ecosystem and technology. Then, we made use of Apollo Client as the library to enable us easily interact with Github GraphQL API. We had to obtain a Github access to make use of the Github GraphQL API. 

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
- [ ] Github GraphQL API
- [ ] Apollo Client 

## Team 💕
<table>
  <tr>
    <td align="center"><a href="https://github.com/sammychinedu2ky"><img src="https://avatars.githubusercontent.com/u/36219292?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Samson Amaugo</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/sumana2001"><img src="https://avatars.githubusercontent.com/u/63084088?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sumana Basu</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/debemenitammy"><img src="https://avatars.githubusercontent.com/u/43294761?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Deborah Emeni</b></sub></a><br /></td>
</table>

## Challenges we ran into 🥺  

## Accomplishments that we're proud of 🥳

## What we learned 🧐

## What's next for Github Stars 💫
