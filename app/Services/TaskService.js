import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js";
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

        let myJSON = JSON.stringify(ProxyState.tasks)
        localStorage.setItem('tasks', myJSON)
    }
    createListItem({ name, id }) {
        let task = ProxyState.tasks.find(t => t.id == id)
        let taskItem = { name: name, checked: false }
        task.items = [...task.items, taskItem]
        ProxyState.tasks = ProxyState.tasks

        let myJSON = JSON.stringify(ProxyState.tasks)
        localStorage.setItem('tasks', myJSON)
    }
    checkBox(id, name) {
        let task = ProxyState.tasks.find(t => t.id == id)
        let item = task.items.find(i => i.name == name)
        item.checked = !item.checked
        let myJSON = JSON.stringify(ProxyState.tasks)
        localStorage.setItem('tasks', myJSON)
    }
    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
        let myJSON = JSON.stringify(ProxyState.tasks)
        localStorage.setItem('tasks', myJSON)
    }
    deleteListItem(id, name) {
        let task = ProxyState.tasks.find(t => t.id == id)
        task.items = task.items.filter(i => i.name != name)
        ProxyState.tasks = ProxyState.tasks

        let myJSON = JSON.stringify(ProxyState.tasks)
        localStorage.setItem('tasks', myJSON)
    }
    loadLocalStorage() {
        let str = localStorage.getItem("tasks")
        if (str) {
            let obj = JSON.parse(str)
            console.log(obj);

            obj.forEach(elem => {
                ProxyState.tasks = [...ProxyState.tasks, new Task(elem.name, elem.color, elem.id, elem.items)]
            });
        }
    }

}

export const taskService = new TaskService()

