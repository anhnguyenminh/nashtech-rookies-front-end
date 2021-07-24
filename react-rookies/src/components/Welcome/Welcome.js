const Welcome = ({name, age, className}) => {
    return(
        <div className={ className }>
            <h1>Hello { name }</h1>
            <h3>Age: { age }</h3>
        </div>
    )
};

export default Welcome;