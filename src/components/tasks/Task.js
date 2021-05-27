const Task = () => {
    return (
        <div className="hover:bg-gray-100 cursor-pointer rounded px-3 py-2 my-2">
            <div class="flex justify-between">
                <div className="my-auto">
                    <i className="fas fa-bars text-gray-300 mr-3 hidden"></i>
                    <input type="checkbox" className="mr-3" /> 
                    Create mockup of pathik
                </div>
                <div className="bg-red-700 rounded-full text-white font-bold text-xs px-2 items-center">pathik</div>
            </div>
        </div>
    );
}

export default Task;