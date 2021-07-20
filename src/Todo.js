import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button, Modal, Input, InputLabel, FormControl } from '@material-ui/core';
import './Todo.css';
import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        left: '40%',
        top: '50%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}))

function Todo({todo, id}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('');

    const handleClose = () => {
        setOpen(false)
    }

    const updateTodo = () => {
        db.collection('todos').doc(todo.id).set({
            todo: input
        }, { merge: true });
        setOpen(false);
    }
    return (
        <React.Fragment key={id}>
        <Modal
        open={open}
        onClose={handleClose}
        >
            <div className={classes.paper}>
                <h1>Edit</h1>
                {/* <input
                value={input}
                placeholder={todo.todo}
                onChange={event => setInput(event.target.value)}/>
                <button onClick={updateTodo}>Update Todo</button> */}

                <form>
                <FormControl>
                <InputLabel>{todo.todo}</InputLabel>
                <Input value={input}
                placeholder={todo.todo}
                onChange={event => setInput(event.target.value)}
                />
                </FormControl>
                <Button disabled={!input} type="submit" onClick={updateTodo} variant="contained" color="primary">edit Todo</Button>
                </form>
            </div>
        </Modal>
        <List className="todo__list" key={id}>
            <ListItem button key={id}>
                <ListItemText primary="Todo" secondary={todo.todo}/>
                <Button onClick={e => setOpen(true)}>Edit</Button>
                <Button onClick={event => db.collection('todos').doc(todo.id).delete()}>DELETE</Button>
            </ListItem>
        </List>
        </React.Fragment>
    )
}

export default Todo
