import React, { useEffect, useState } from 'react';
import './CounterView.css';

const CounterView = ({ model, intent }) => {
    const [count, setCount] = useState(0);
    const [autoIncrement, setAutoIncrement] = useState(false);

    useEffect(() => {
        const countSub = model.count$.subscribe(setCount);
        const autoSub = model.autoIncrement$.subscribe(setAutoIncrement);

        return () => {
            countSub.unsubscribe();
            autoSub.unsubscribe();
        };
    }, [model]);

    return (
        <div className="counter">
            <h1>Counter: {count}</h1>
            <button onClick={intent.decrement}>-</button>
            <button onClick={intent.reset}>Reset</button>
            <button onClick={intent.increment}>+</button>
            <button onClick={model.toggleAutoIncrement}>
                {autoIncrement ? 'Stop Auto' : 'Start Auto'}
            </button>
        </div>
    );
};

export default CounterView;
