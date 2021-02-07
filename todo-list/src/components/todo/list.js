import React from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './list.scss';

function TodoList(props) {

    return (
        <ul>
            {props.list.map(item => (

                // <ListGroup.Item action variant="success" className={`complete-${item.complete.toString()}`}
                //   key={item._id}><span onClick={() => props.handleComplete(item._id)}>
                //     {item.text}
                //   </span></ListGroup.Item>

                <ListGroup.Item
                    variant={(item.complete) ? 'danger' : 'success'}
                    className={`complete-${item.complete.toString()}`}
                    key={item._id}
                >
                    <span id="listSpan" onClick={() => props.handleComplete(item._id)}>
                        {item.text}
                    </span>
                </ListGroup.Item>
            ))}
        </ul>
    );
}


export default TodoList;