import { useEffect, useState } from "react"
import User from "./User"

export default function Users () {
    const [users, Setusers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => Setusers(data))

    }, [])


    const usersStyle = {
        border: '2px solid black',
        padding: '20px',
        marginBottom: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={usersStyle}>
            <h2>Users: {users.length}</h2>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    )
}