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
}

export const taskService = new TaskService()