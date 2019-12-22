import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoArray =[];
  addTodo(value){   
    if (""!=value){
      this.todoArray.push(value);
      console.log(this.todoArray);
    }
    else{      
      alert('Field required **');
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

  todoSubmit(value:any){
    if(""!=value.todo){
      this.todoArray.push(value.todo)
      console.log(this.todoArray);
   }else{
     alert('Field required **')
   }
  }
}
