import React, {useState} from 'react';
import styles from "./Counter.module.scss";

const Counter = () => {
    const [count, setCount] = useState(0)

    const increments = () => {
        setCount(count + 1)
    }

    return (
        <div>
            {count}
            <button className={styles.button} onClick={increments}>
                <div className="div">
                    Increment
                </div>
            </button>
        </div>
    );
};

export default Counter;