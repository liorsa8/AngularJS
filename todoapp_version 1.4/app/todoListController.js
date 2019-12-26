var todoListController = /** @class */ (function () {
    function todoListController() {
        this.title = "Todo List";
        this.todoArray = [];
        this.textInput = "";
        console.log("In Ctor");
    }
    todoListController.prototype.addTodo = function (value) {
        if ("" != value) {
            this.todoArray.push(value);
            this.textInput = "";
            console.log(this.todoArray);
        }
        else {
            alert('Field required **');
            console.log("addTodo failed");
        }
    };
    todoListController.prototype.deleteItem = function (todo) {
        for (var i = 0; i <= this.todoArray.length; i++) {
            if (todo == this.todoArray[i]) {
                console.log(this.todoArray[i]);
                this.todoArray.splice(i, 1);
            }
        }
    };
    todoListController.prototype.todoSubmit = function (value) {
        if ("" != value) {
            this.todoArray.push(value);
            this.textInput = "";
            console.log(this.todoArray);
        }
        else {
            alert('Field required **');
            console.log("todoSubmit failed");
        }
    };
    return todoListController;
}());
angular
    .module("mainModule")
    .controller("todoListController", todoListController);
