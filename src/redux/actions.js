import axios from 'axios';

export const getTasksInActions = () => {
  return (dispatch) => axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res) => dispatch({type: 'GET_TASKS', payload: res.data.slice(0, 55)}))
    .catch(err => console.log(err))
}

