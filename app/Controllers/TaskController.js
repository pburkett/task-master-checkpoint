import task from "../Models/Task.js"
import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"
function _draw() {
    let targetElem = document.getElementById("task-card-row")
    let template = ''
    for (let index in ProxyState.tasks) {
        template += ProxyState.tasks[index].Template
    }
    targetElem.innerHTML = template
}

export default class TaskController {
    constructor() {
        console.log('controller init');
        ProxyState.on("tasks", _draw)
        _draw()
    }

    pickColor(color, btnNumber) {
        document.getElementById(`color-btn-${btnNumber}`).classList.replace(`bg-${color}`, `bg-${ProxyState.selectedColor}`)
        let btnOnClick = `app.TaskController.pickColor("${ProxyState.selectedColor}", ${btnNumber})`
        document.getElementById(`color-btn-${btnNumber}`).setAttribute("onClick", btnOnClick)
        document.getElementById("color-dropdown-container").classList.replace(`bg-${ProxyState.selectedColor}`, `bg-${color}`)
        taskService.pickColor(color)
    }
    createTask() {
        window.event.preventDefault()
        let form = window.event.target
        taskService.createTask(form.name.value)
    }
}