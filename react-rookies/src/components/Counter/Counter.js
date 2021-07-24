import './Counter.css';

const Counter = ({value, handleMinus, handleAdd}) => {

    return (
        <div className="counter">
            <div>
                <button
                    className="button-counter"
                    onClick={handleMinus}
                >
                    -
                </button>
                <span className="counter-value">{value}</span>
                <button
                    className="button-counter"
                    onClick={handleAdd}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Counter;