import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';

const TodoList = () => {

    return (
        <>
        <div className="header text-center">
            <Modal />
        </div>
        <div className="task-container">
            <Card/>
        </div>
       
        </>
    );
};

export default TodoList;