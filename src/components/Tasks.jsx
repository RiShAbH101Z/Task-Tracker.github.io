import PropTypes from 'prop-types'
import Task from './Task' 

const Tasks = ({ list, onDelete, onToggle }) => {
    return (
        <>
            {
                list.map(task => <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>)
            }
        </>
    )
}
Tasks.defaultProps = {
    list: [],
}
Tasks.propTypes = {
    list: PropTypes.array,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func
}
export default Tasks
