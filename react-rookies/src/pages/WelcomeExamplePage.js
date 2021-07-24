import React from 'react';
import Welcome from "../components/Welcome/Welcome";

const WelcomeExamplePage = ({className}) => {

    const people = [{
        age: 10,
        name: "Trixie",
        id: 0
    },
        {
            age: 25,
            name: "Alexandra",
            id: 1
        },
        {
            age: 18,
            name: "Eagle",
            id: 2
        }];

    return (
        <div>
            {people.map(person => (
                <Welcome
                    key={person.id}
                    age={person.age}
                    name={person.name}
                />
            ))}
        </div>
    );
};

export default WelcomeExamplePage;