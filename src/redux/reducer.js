
const initialState={
  tasks: []
}
 const reducer = (state=initialState, action)=>{
  switch(action.type){
    case 'GET_TASKS': 
      return {
        ...state,
        tasks: action.payload
      };

    case 'CREATE_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case 'UPDATE_TASK':
      const newTasks = state.tasks.map(task=>task.id===action.payload.id ?
          {...task, title: action.payload.title} : task)
      return {
        ...state,
        tasks: newTasks
      };

      case 'DELETE_TASK':
        const tasksAfterDelete = state.tasks.filter(task=>task.id!==action.payload)
        return {
          ...state,
          tasks: tasksAfterDelete
        }


    default: 
      return state;
  }

}
export default reducer;