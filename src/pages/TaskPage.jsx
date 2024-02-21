import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard/index";

const TaskPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>no tasks</h1>;

  return (
    <div className="row">
      {tasks.map((task) => (
        <div className="col-md-6 col-lg-4" key={task._id}>
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskPage;
