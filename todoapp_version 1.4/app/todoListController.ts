interface ITodoListModel{
    title: string;
    todoArray: any[];
    textInput:string;

    addTodo(value):void;  
    deleteItem(todo):void;  
    todoSubmit(value:any):void;  
}

class todoListController implements ITodoListModel{
        
    title: string;
    todoArray: any[];
    textInput:string;
 
    constructor(){
        this.title = "Todo List";
        this.todoArray = []; 
        this.textInput = "";
        console.log("In Ctor");
    }
 
    addTodo(value:string){   
        if (""!=value){
          this.todoArray.push(value);
          this.textInput="";
          console.log(this.todoArray);
        }
        else{      
          alert('Field required **');
          console.log("addTodo failed");
        }
      }
    
      deleteItem(todo){
        for(let i=0 ;i<= this.todoArray.length ;i++){    
          if(todo == this.todoArray[i]){     
            console.log(this.todoArray[i]); 
            this.todoArray.splice(i,1)
          }   
        }
      }
    
      todoSubmit(value:string){
        if(""!=value){
          this.todoArray.push(value);
          this.textInput="";
          console.log(this.todoArray);
        }else{
         alert('Field required **');
         console.log("todoSubmit failed");
       }
      }
}

angular 
    .module("mainModule")
    .controller("todoListController", todoListController);