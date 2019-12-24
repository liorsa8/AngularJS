var todoListController = /** @class */ (function () {
    function todoListController() {
        this.title = "Todo List";
        this.product = [];
    }
    return todoListController;
}());
angular
    .module("mainModule")
    .controller("todoListController", todoListController);
