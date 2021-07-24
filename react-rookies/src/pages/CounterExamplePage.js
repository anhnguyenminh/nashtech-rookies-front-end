import React, {useState, useEffect} from 'react';
import Counter from "../components/Counter/Counter";

const CounterExamplePage = () => {
    const [value, setValue] = useState(0); //sorthand
    const handleMinus = () => {
        setValue(value - 1);
    }
    const handleAdd = () => {
        setValue(value + 1);
    }

    useEffect(() => {
        document.title = `Current count: ${value}`
    }, [value]);
    // useEffect(() => {
    //     localStorage.setItem('CURRENT_COUNT', value)
    // }, []);

    return (
        <div>
            <Counter
                value={value}
                handleMinus={handleMinus}
                handleAdd={handleAdd}
            />
            <h1>Current value {value}</h1>
        </div>
    );
};

export default CounterExamplePage;
