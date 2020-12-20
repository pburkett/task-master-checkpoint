import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor(name, color, id, items) {
        this.name = name
        this.color = color
        this.items = items || []
        this.id = id || generateId()
    }

    get Template() {
        let template = `
        <div class="col-3 mx-2 px-0 mb-5 task-card">
            <div class="task-header d-grid bg-${this.color}">
                
                <button onclick="app.TaskController.deleteTask('${this.id}')" class="fa fa-times bg-${this.color} border-none justify-self-end" aria-hidden="true"></button>
                <h3 class="justify-self-center  align-self-center"> ${this.name}</h3>
            </div>
                <div class="row mx-4">
                    <div class="col">
                    `
        for (let index in this.items) {
            let item = this.items[index]
            template += `
                <div class="row my-1 align-items-center">
                    <input onclick="app.TaskController.checkBox('${this.id}', '${item.name}')" class="col-1 list-item-checkbox" type="checkbox"></input>
                    <h5 class="col my-0">${item.name}</h5>
                    <button onclick="app.TaskController.deleteListItem('${this.id}','${item.name}')" class="fa fa-times bg-${this.color} border-none justify-self-end" aria-hidden="true"></button>
                </div>
            `
        }
        template += `
            <form onsubmit="app.TaskController.createListItem()" class="row justify-content-center task-form">
                <input id="name" class="col-8 align-self-end cus-form" type="text" placeholder="New item...">
                <input type="hidden" name="id" value="${this.id}">
                <button class="col-2 align-self-end text-dark btn btn-primary ml-3" type="submit">
                <i class="fa fa-plus"></i></button>
            </form>
        </div>
    </div>
</div >
        `
        return template
    }
}