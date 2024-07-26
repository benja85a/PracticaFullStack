import { useForm } from "react-hook-form"
import { useTasks } from "../context/TaskContext"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

const TaskFormPage = () => {
  const { register, handleSubmit, setValue } = useForm()
  const { createTask, getTask, updateTask } = useTasks()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id)
        console.log(task)
        setValue("title", task.title)
        setValue("description", task.description)
        setValue("date", dayjs(task.date).utc().format('YYYY-MM-DD'))
      }
    }
    loadTask()
  }, [getTask, params.id, setValue])

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
    }
    console.log(dataValid)

    if (params.id) {
      updateTask(params.id, dataValid)
    } else {
      createTask(dataValid)
    }
    navigate("/tasks")
  })

  return (
    <div className="container mt-5">
      <div className="justify-content-center">
        <form
          onSubmit={onSubmit}
          className="col-md-8 bg-light p-4 border rounded"
        >
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            className="form-control mb-3"
            autoFocus
          />
          <textarea
            rows="3"
            placeholder="Description"
            {...register("description")}
            className="form-control mb-3"
          ></textarea>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            {...register("date")}
            className="form-control mb-3"
          />

          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default TaskFormPage
