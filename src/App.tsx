import React, {useState} from 'react';
import './App.scss'

const App = () => {
    const [count, setCount] = useState(0)

    const increments = () => {
        setCount(count + 1)
    }

    return (
        <div>
            {count}
            <button onClick={increments}>
                <div className="div">
                    Increment
                </div>
            </button>
            Hello world!!!
        </div>
    );
};

export default App;