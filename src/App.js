
import { Button, FormControl, Input, InputLabel, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/todo.component';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);

  const [input_text,setInput_text] = useState('');
  const [input_data,setInput_data] = useState('');
  const [input_obs,setInput_obs] = useState('');

  useEffect(()=>{
    //this code here.. fires when app.js loads
    db.collection('todos').orderBy('data','asc').onSnapshot(snapshot => {
      //console.log((snapshot.docs.map(doc => doc.data().todo)));
      setTodos(snapshot.docs.map(doc => ({id:doc.id ,todo:doc.data().todo,data:doc.data().data,obs:doc.data().obs})));

    })
  },[])

  const addToto = (event) =>{
    // thill will fire off when we click the button
    event.preventDefault();
    //console.log('👽 ','I am working!')
    //console.log(todos);
    if(input_text.length > 0&& input_data.length>0){
      // let ok =true;
      // for(const i in todos){
      //   //console.log(todos[i]["todo"]);
      //   if(todos[i]["todo"] === input)
      //     {ok = false;break;}
      // }
      // if (ok===true)
        db.collection('todos').add({
          todo: input_text,
          //timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          data : input_data,
          obs: input_obs,
        });
    }
    setInput_text('');
    setInput_data('');
    setInput_obs('');
  }
  return (
    <div className="App">
        <h1>Agenda</h1>
  
        <FormControl className="form-todo">
          
                <TextField
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  value={input_data}
                  defaultValue="2021-03-01T12:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e)=>setInput_data(e.target.value)}
                />
            <div className="complete">
            <InputLabel className="inputLabel-name">✅ Name</InputLabel>
          <Input id="new_record" value={input_text} onChange={(e)=>setInput_text(e.target.value)} />
            <InputLabel className="inputLabel-obs">✅ Description</InputLabel>
          <Input id="new_record" value={input_obs} onChange={(e)=>setInput_obs(e.target.value)} />
                  </div>
          <Button type="submit" onClick={addToto} variant="contained" color="primary">
              Add new activity
          </Button>
          
          <ul >
            {
              todos.map(
                (todo, index)=>(
                <Todo key={index} text={todo}/>
                )
              )
            }
          </ul>
        </FormControl>
  </div>
  );
}

export default App;
