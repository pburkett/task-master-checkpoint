import task from "../Models/Task.js"
import { ProxyState } from "../AppState.js"
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


}