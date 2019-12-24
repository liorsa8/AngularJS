interface ITodoListModel{
    title: string;
    product: any[];
}

class todoListController implements ITodoListModel{
    title: string;
    product: any[];
 
    constructor(){
        this.title = "Todo List";
        this.product = []; 
    }
}

angular 
    .module("mainModule")
    .controller("todoListController",todoListController);