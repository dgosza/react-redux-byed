import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/counter'

function App() {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.logged)

    return (
        <>
            <p>Counter: {counter}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            <h3>{isLogged}</h3>
        </>
    );
}

export default App;
