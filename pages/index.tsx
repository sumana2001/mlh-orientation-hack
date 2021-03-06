import { NextPage } from "next";
import Head from "next/head";
import { createContext, useReducer } from "react";
import Header from "../Components/Header";
import Line from "../Components/Line";
import UserList from "../Components/UserList";
import styles from "../styles/Home.module.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IDataContext {
  state?: {
    nameWithOwner?: string;
    url?: string;
    stargazerCount?: Number;
    info?: [];
  };
  dispatch?: ({ type, data }: any) => void;
}

const reducer = (
  state: {
    nameWithOwner?: string;
    url?: string;
    stargazerCount?: Number;
    info?: [];
  },
  action: any
) => {
  switch (action.type) {
    case "DATA":
      let newState = {
        nameWithOwner: action.nameWithOwner,
        url: action.url,
        stargazerCount: action.stargazerCount,
        info: action.data,
      };
      return newState;
    default:
      return state;
  }
};
export const DataContext = createContext<IDataContext>({});
const Home: NextPage = () => {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  const [state, dispatch] = useReducer(reducer, {});
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
      authorization: "Bearer " + token,
    },
    cache: new InMemoryCache(),
  });
  let value = { state, dispatch };
  return (
    <ApolloProvider client={client}>
      <DataContext.Provider value={value}>
        <div className={styles.container}>
          <Head>
            <title>Github Stars</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="https://res.cloudinary.com/dqlh4eyt8/image/upload/v1643966553/starslogo_n5oezu.png" />
          </Head>

          <main className={styles.main}>
            <Header />
            <Line />
            <div className={styles.grid}>
              <UserList />
            </div>
          </main>

          <footer className={styles.footer}>Made with &hearts;</footer>
        </div>
      </DataContext.Provider>
    </ApolloProvider>
  );
};

export default Home;
