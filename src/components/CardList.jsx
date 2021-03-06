import React, { Fragment } from 'react';
import Card from './Card';

const CardList = props => {

    // Error test
    // if (true) {
    //     throw new Error('NO!!!');
    // }

    const { robots } = props;

    const cardsArray = robots.map(robot => {
        return (
            <Card
                key={`robot${robot.id}`}
                id={robot.id}
                name={robot.name}
                email={robot.email}
            />
        )
    });

    return (
        <Fragment>
            {cardsArray}
        </Fragment>
    );
}

export default CardList;