export default function User ({user}) {
    const {name, email} = user;
    const usersStyle = {
        border: '2px solid tomato',
        padding: '30px',
        marginBottom: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={usersStyle}>
            <h2>User Name: {name} </h2>
            <p>User Email: {email} </p>
        </div>
    )
}