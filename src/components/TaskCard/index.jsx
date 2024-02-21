import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTasks } from "../../context/TaskContext";
import days from "dayjs";
import utc from "dayjs/plugin/utc";
days.extend(utc);

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();
  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text">
          {days(task.date).utc().format("DD/MM/YYYY")}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          Eliminar
        </button>
        <Link className="btn btn-primary" to={`/tasks/${task._id}`}>
          Editar
        </Link>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskCard;
