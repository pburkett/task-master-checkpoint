import { ProxyState } from "../AppState.js"
import task from "../Models/Task.js"


class TaskService {
    constructor() {
        console.log('ey');
    }

    pickColor(color) {
        ProxyState.selectedColor = color
    }
    createTask(name) {
        let newTask = new task(name, ProxyState.selectedColor)
        ProxyState.tasks = [...ProxyState.tasks, newTask]
    }
    createListItem({ name, id }) {
        let task = ProxyState.tasks.find(t => t.id == id)
        task.items = [...task.items, name]
        ProxyState.tasks = ProxyState.tasks
    }

}

export const taskService = new TaskService()