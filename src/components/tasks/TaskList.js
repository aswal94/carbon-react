import Task from "./Task"

const TaskList = (props) => {
    return (
        <div  className="mb-10">
            <div class="flex justify-between mb-5 ml-10">
                <h1 className="font-bold text-xl">{props.name}</h1>
                <i class="fas fa-chevron-down mr-3 text-xs my-auto"></i>
            </div>

            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    );
}

export default TaskList;