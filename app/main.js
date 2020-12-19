// import ValuesController from "./Controllers/ValuesController.js";
import TaskController from "./Controllers/TaskController.js"
class App {
  // valuesController = new ValuesController();
  TaskController = new TaskController();
}

window["app"] = new App();
