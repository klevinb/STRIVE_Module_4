import React from 'react';
import dishes from '../data/menu.json'
import { Container } from 'react-bootstrap'
import SingleDish from './SingleDish'

const Menu = () => (

    <Container>
        {dishes.map(dish => <SingleDish dish={dish} key={dish.id} />)}
    </Container>

)

export default Menu;