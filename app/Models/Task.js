import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor(name, color, id) {
        this.name = name
        this.color = color
        this.items = []
        this.id = id || generateId()
        console.log(this.id);
    }

    get Template() {
        let template = `
        <div class="col-3 mx-2 px-0 mb-5 task-card">
            <h3 class="task-header py-2 bg-${this.color} text-center"> ${this.name}</h3>
                <div class="row mx-4">
                    <div class="col">
                    `
        for (let index in this.items) {
            let item = this.items[index]
            template += `
                <div class="row my-1 align-items-center">
                    <input class="col-1 list-item-checkbox" type="checkbox"></input>
                    <h5 class="col my-0">${item}</h5>
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
    </div >
</div >
        `
        return template
    }
}