import styles from '../styles/Home.module.css'
import { DataContext } from '../pages/index'
import { gql, useApolloClient, useLazyQuery, useQuery } from '@apollo/client';
import { useContext, useEffect, useState } from 'react'
export default function Header() {
    let [input, setInput] = useState('');
    let { dispatch } = useContext(DataContext)
    const client = useApolloClient();
    let query = gql`
    query($name:String!,$owner:String!) { 
        repository(name:$name,owner:$owner){
        stargazers(first:100){
            nodes{
              name
              avatarUrl
              login
              
            }
          }
        }
        }`


    let handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault()
        if(input.length==0)return
        let url = input
        let parseUrl = new URL(url).pathname.trim().split("/")
        let owner = parseUrl[1]
        let name = parseUrl[2]
        try {
            const { data } = await client.query({
                query,
                variables: { owner, name },
            });
           
            dispatch?.({type:"DATA", data: data.repository.stargazers.nodes})
            setInput('')
        } catch(error) {
            alert(error)
        }
       
      
    }


    return (
        <>
            <h1 className={styles.title}>Github Stars</h1>
            <p className={styles.description}>Find out who starred your repo✨</p>
            <form className={styles.form}>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter github repository"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}