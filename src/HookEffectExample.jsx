import react, { useState, useEffect } from "react"

function HookEffectExample() {

    const [resourceType, setresourceType] = useState('posts')
    const [items, setItems] = useState([])

    console.log('render')

    

    return (
        <>
            <div>
                <button onClick={() => setresourceType('posts')}>Posts</button>
                <button onClick={() => setresourceType('users')}>Users</button>
                <button onClick={() => setresourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map(item => {
                return <p>{JSON.stringify(item)}</p>
            })}
        </>
    )
}

export default HookEffectExample