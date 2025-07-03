let tasks = [
    { id: 1, title: "Belajar PHP", status: "belum" },
    { id: 2, title: "Kerjakan tugas UX", status: "selesai" }
];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        taskList.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <input type="checkbox" onchange="toggleTask(${task.id})" class="mr-2" ${task.status === 'selesai' ? 'checked' : ''}>
                    <span class="${task.status === 'selesai' ? 'completed' : ''}">${task.title}</span>
                </div>
                <div>
                    <span class="badge badge-${task.status === 'selesai' ? 'success' : 'warning'} ml-2">${task.status}</span>
                    <button class="btn btn-warning btn-sm ml-2" onclick="editTask(${task.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Hapus</button>
                </div>
            </li>
        `;
    });
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    const newTitle = prompt("Edit task title:", task.title);
    if (newTitle) {
        task.title = newTitle;
        renderTasks();
    }
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    task.status = task.status === 'selesai' ? 'belum' : 'selesai';
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}

document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskTitle = e.target.title.value;
    const newTask = { id: tasks.length + 1, title: taskTitle, status: 'belum' };
    tasks.push(newTask);
    e.target.reset();
    renderTasks();
});

renderTasks();
