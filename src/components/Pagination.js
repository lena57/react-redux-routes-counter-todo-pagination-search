import React from 'react';
import {connect} from 'react-redux';

const Pagination = (props) => {

const pagesNumberArr=[];

  for(let i=1; i<=Math.ceil(props.tasks.length/props.tasksPerPage); i++){
    pagesNumberArr.push(i)
  }

  return (
    <nav className="container mt-3" >
      <ul className="pagination">
        {pagesNumberArr.map((page) => (
          <li className="page-item" key={page}>
            <a onClick={() => props.paginate(page)} className="page-link" href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const mapStateToProps = (state)=>({
  tasks: state.tasks
})

export default connect(mapStateToProps)(Pagination);
