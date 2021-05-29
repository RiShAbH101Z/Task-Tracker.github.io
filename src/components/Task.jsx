import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {

    return (
        <div className= {`task ${task.reminder ? 'reminder' : ''}`}  onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}
            <FaTimes style={{cursor:'pointer', color:'red'}} onClick={()=>onDelete(task.id)}/>
            </h3>
            <p  onClick={() => onToggle(task.id)}>{task.day}</p>
        </div>
    )
}

Task.defaultProps = {
    task: {id:0,text:'My Task',day:'',reminder:false}
}
Task.propTypes = {
    task: PropTypes.object,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func
}
export default Task
