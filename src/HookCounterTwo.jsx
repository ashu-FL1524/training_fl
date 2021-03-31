import react, { useState } from "react"

function HookCounterTwo(){

const initialCount = 0
const [count, setCount] = useState(initialCount)

const incrementFive = () => {
for(let i=0;i<5;i++){
setCount(prevState => prevState + 1)
}
}
const decrementTen = () => {
    for(let i=0;i<10;i++){
    setCount(prevState => prevState - 1)
    }
    }

return(
<div>
Count: {count}
<button onClick={() => setCount(initialCount)}>Reset</button>
<button onClick={() => setCount(count+1)}>Increment</button>
{/* the above and below lines are not good pratice to write the code. We have to use the prevState */}
<button onClick={() => setCount(count-1)}>Decrement</button> <br/>

{/* Using prevState below to increment and Decrement by one. Same code as line 18 and 20 but here we are using prevState */}

<button onClick={incrementFive}>Increment by 5</button>
<button onClick={decrementTen}>Decrement by 10</button>
</div>
)
}

export default HookCounterTwo