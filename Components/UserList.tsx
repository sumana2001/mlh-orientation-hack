import { useContext } from 'react'
import { DataContext } from '../pages'
import User from './User'
import styles from '../styles/Home.module.css'
export default function UserList() {
    let context = useContext(DataContext)
    return (
        <>
           <div>{context.state?.name}</div>
            {context.state?.info?.map((user: any, key: any) => <User key={key} data={user} />)}
        </>
    )
}