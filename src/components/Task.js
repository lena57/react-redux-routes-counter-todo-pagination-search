import {connect} from 'react-redux';
import {useState} from 'react';

const Task = (props) => {

  const [titleInput, setTitleInput] = useState(props.task.title);
  const [open, setOpen] = useState(false)

  const toggle = ()=>{
    setOpen(!open)
  }

  const handleSave = ()=>{
    const updatedTitle = titleInput

    props.updateTask(props.task.id, updatedTitle)
    toggle()
    setTitleInput(titleInput)
  }

  const handleCancel=()=>{
    setTitleInput(props.task.title)
    toggle()
  }

  return (
    <div class="container text-center">
    <div className="row">
      <div className="col-sm-12 mb-3 ">
        <div className="card">
          <div className="card-body d-flex justify-content-between align-items-center">
            {props.task.title}
            <div className="d-flex justify-content-between align-items-center">
              {open && <>
                <input style={{width: "300px"}} className="form-control" value={titleInput} onChange={(e)=>setTitleInput(e.target.value)}/>
                <button onClick={handleSave} className="btn btn-outline-success">Save</button>
                <button onClick={handleCancel} className="btn btn-outline-info">Cancel</button>

              </>}
              {!open && 
              <button type="button" className="btn btn-outline-primary me-2"
              onClick={toggle}>
                Update 
              </button>
              }

              <button type="button" className="btn btn-outline-danger"
              onClick={()=>props.deleteTask(props.task.id)}>
                Delete 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch)=>({
  updateTask: (id, updatedTitle)=>dispatch({type: 'UPDATE_TASK', payload: {id, title: updatedTitle}}),
  deleteTask: (id)=>dispatch({type: 'DELETE_TASK', payload: id})
})

export default connect(null, mapDispatchToProps)(Task);

