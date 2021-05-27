import TaskList from "./tasks/TaskList"

const Dashboard = () => {
    return (
        <div>
            <header className="border-b py-2 bg-pink-800">
                <div className="container mx-auto">
                    <i className="fas fa-bars text-gray-100 mr-3"></i>
                    <span className="font-bold text-lg text-gray-100">carbon</span>
                </div>
            </header>
            <div className="flex h-screen">
                <div className="w-64 bg-gray-100">
                    <nav className="flex flex-col px-5 mt-8">
                        <a href="#" className="py-2 text-sm px-3 rounded hover:bg-gray-200"><i className="fas fa-tasks mr-3"></i> Today</a>
                        <a href="#" className="py-2 text-sm px-3 rounded hover:bg-gray-200"><i className="far fa-calendar-alt mr-3"></i> Upcoming</a>

                        <span className="px-3 font-bold text-gray-800 mt-8 pb-3"><i class="fas fa-chevron-down mr-3 text-xs"></i> Projects</span>

                        <a href="#" className="py-2 text-sm px-3 rounded hover:bg-gray-200"><i class="fas fa-folder mr-3"></i> Today</a>
                        <a href="#" className="py-2 text-sm px-3 rounded hover:bg-gray-200"><i class="fas fa-folder mr-3"></i> Upcoming</a>
                    </nav>
                </div>
                <div className="w-full pt-16 pl-8 pr-10">

                    <div className="max-w-3xl">
                    <TaskList name="Pending" />
                    <TaskList name="Today" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;