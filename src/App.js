import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(true);
  useEffect(() =>{
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  },[])

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();
    console.log(data)
    return data      
  }

  //Fetch Tasks
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();
    console.log(data)
    return data      
  }

  //Delete Tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{method : 'Delete'})
    setTasks(tasks.filter(task => task.id !== id));
  }
  
  //Toggle Reminder
  const toggleReminder = async(id) => {
    const tasktoToggle = await fetchTask(id)
    const updTask = {
      ...tasktoToggle, reminder: !tasktoToggle.reminder
    }
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method:'put',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json();
    setTasks(
      tasks.map(
        task => task.id===id ? {...task, reminder:data.reminder} : task
      )
    )
  };

  //Add Tasks
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',{
      method : 'Post',
      headers : {
        'Content-type': 'application/json'
      },
      body : JSON.stringify(task)
    })
    const data = await res.json();
    setTasks([...tasks, data])
    // console.log(tasks.length)
  };

  return (
    <Router>
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      <Route path="/" exact render={(props)=>(
          <>
          {showAddTask && <AddTask onAdd={addTask}/>}
          {tasks.length > 0 ? <Tasks list={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks Found'}
          </>
        )} />
      <Route path="/about" component={About} />
      <Footer />
    </div>
    </Router>
  );
} 

export default App;
