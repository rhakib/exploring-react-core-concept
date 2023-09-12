import { useState } from "react"

export default function () {

    const [player, addPlayer] = useState(11)

    const handleAddPlayer = () => {
        const addNewPlayer = player + 1;
        addPlayer(addNewPlayer)
    }
    const handleRemovePlayer = () => {
        const addNewPlayer = player - 1;
        addPlayer(addNewPlayer)
    }

    const teamStyle = {
        border: '2px solid purple',
        padding: '20px',
        marginBottom: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={teamStyle}>
            <h2>Players: {player} </h2>
            <button onClick={handleAddPlayer}> Add Player</button>
            <button onClick={handleRemovePlayer}> Remove Player</button>
        </div>
    )
}