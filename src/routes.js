import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';


export const AppRoutes = ()=>{

  return (
    <div>
      <Routes>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/todo' element={<ToDoList/>}/>

      </Routes>

    </div>
  )
}