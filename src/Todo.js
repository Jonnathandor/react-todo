import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button, Modal } from '@material-ui/core';
import './Todo.css';
import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}))

function Todo({todo}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const handleOpen = () => {

    };

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
        <Modal
        open={open}
        onClose={handleClose}
        >
            <div className={classes.paper}>
                <h1>Open</h1>
                <button onClick={e => setOpen(false)}></button>
            </div>
        </Modal>
        <List className="todo__list">
            <ListItem button>
                <ListItemText primary="Todo" secondary={todo.todo}/>
                <Button onClick={e => setOpen(true)}>Edit</Button>
                <Button onClick={event => db.collection('todos').doc(todo.id).delete()}>DELETE ME</Button>
            </ListItem>
        </List>
        </>
    )
}

export default Todo
