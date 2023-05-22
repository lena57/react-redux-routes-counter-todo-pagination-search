import React, {useState, useEffect} from 'react';
import Task from './Task'
import {connect} from 'react-redux';
import { getTasksInActions } from '../redux/actions';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const ToDoList = (props)=>{

  const [input, setInput]=useState('');
  const [todoMatches, setTodoMatches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage=4;

//get current tasks
const indexOfLastTask = currentPage*tasksPerPage;
const indexOfFirstTask = indexOfLastTask-tasksPerPage;
const currentTasks = props.tasks.slice(indexOfFirstTask, indexOfLastTask);

//change the page to current page
const paginate=(pageNumber)=>{
  setCurrentPage(pageNumber)
}
   
  useEffect(()=>{
    props.getTasks()
  }, [])


  const handleSubmit = (e)=>{
    e.preventDefault()
    const newTask = {
      "userId": 2,
      "id": Math.random(),
      "title": input,
      "completed": false
    }
    props.createTask(newTask);
    setInput('')
  }

  const onSearch = (searchText)=>{
    if(searchText.length===0){
      setTodoMatches([]);
      return;
    }
    todoFromSearch(searchText)
  }
  
  const todoFromSearch = (searchText)=>{
    const matches = props.tasks.filter((task)=>{
      const regex = new RegExp(searchText, 'gi')
      return task.title.match(regex)
    })

    setTodoMatches(matches)
  }
 

return(
  <div style={{ margin: "auto"}}>

    <form onSubmit={handleSubmit} >
      <h2>ToDo List</h2>
      <input style={{margin: "20px", width: "300px"}}
      type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button type="submit" className="btn btn-success">Create Task</button>

        <SearchBar onSearch={onSearch}/>
        <div>
            {todoMatches.length > 0 &&
              todoMatches.map((task) => <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Task key={task.id} task={task}/>
            </div>)}
        </div>  


        <div>
          {todoMatches.length===0 && 
          currentTasks.map(task=><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Task key={task.id} task={task}/>
        </div>)}

    </div>
  </form>
        <div>
          <Pagination paginate={paginate} tasksPerPage={tasksPerPage}/>
        </div>
  </div>
)

}

const mapStateToProps = (state)=>({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch)=>({
  getTasks: ()=>dispatch(getTasksInActions()),
  createTask: (newTask)=>dispatch({type: 'CREATE_TASK', payload: newTask})
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);