import { useContext } from 'react'
import { DataContext } from '../pages'
import User from './User'
import styles from '../styles/Home.module.css'
export default function UserList() {
    let context = useContext(DataContext)
    return (
        <>
           <div className={styles.name}>
               {context.state?.name}
           </div>
           <div className={styles.url}>{context.state?.url}</div>
           <div className={styles.count}>{context.state?.stargazerCount}</div>
           <br/>
           <div className={styles.grid}>
            {context.state?.info?.map((user: any, key: any) => <User key={key} data={user} />)}
            </div>
        </>
    )
}