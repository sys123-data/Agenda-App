import { Button, Checkbox, List, ListItem, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import db from '../firebase';

function Todo(props) {
   
    const remover = (event) =>{
        // thill will fire off when we click the button
        event.preventDefault();
        db.collection('todos').doc(props.text.id).delete();
      }
    return (
        <List>
           
            <ListItem>
                <div>
                <TextField
                    type="datetime-local"
                    value={props.text.data}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
               
                <ListItemText >
                 <br/><b>{props.text.todo}</b>: {props.text.obs}</ListItemText> </div>
                <Button type="button" className="remover" onClick={remover}>❌ </Button>
                
            </ListItem>
        </List>
    )
}

export default Todo;