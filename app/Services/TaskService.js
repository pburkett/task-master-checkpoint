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
        let taskItem = { name: name, checked: false }
        task.items = [...task.items, taskItem]
        ProxyState.tasks = ProxyState.tasks
    }
    checkBox(id, name) {
        let task = ProxyState.tasks.find(t => t.id == id)
        let item = task.items.find(i => i.name == name)
        item.checked = !item.checked
        console.log(item);
    }

}

export const taskService = new TaskService()