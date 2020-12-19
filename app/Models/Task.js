

export default class Task {
    constructor(name, color) {
        this.name = name
        this.color = color
        this.items = []
    }

    get Template() {
        let template = `<div class="col-3 mx-2 px-0 task-card">
            <h3 class="task-header py-2 bg-${this.color} text-center"> ${this.name}</h3>
                <div class="row mx-4">
                    <div class="col">`
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
            <form class="row justify-content-center task-form">
                <input class="col-8 align-self-end cus-form" type="text" placeholder="New item...">
                <button class="col-2 align-self-end text-dark btn btn-primary ml-3" type="submit"
                onsubmit="app.listController.addListItem()"><i class="fa fa-plus"></i></button>
            </form>
        </div>
    </div >
</div >
        `
        return template
    }
}