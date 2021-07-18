import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import './Todo.css';

function Todo({todo}) {
    return (
        <List>
            <ListItem button>
                <ListItemText primary="Todo" secondary={todo}/>
            </ListItem>
        </List>
    )
}

export default Todo