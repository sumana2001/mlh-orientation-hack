import { useContext } from 'react'
import { DataContext } from '../pages'
import User from './User'
export default function UserList() {
    let context = useContext(DataContext)
    return (
        <>
            {context.state?.map((user: any, key: any) => <User key={key} data={user} />)}
        </>
    )
}