import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
    newTodo: string = '';
    initialCount: number = 0;
    @ViewChild('newTodoInput') newTodoInput: ElementRef;

    constructor(
        public todoListService: TodoListService
    ) { }

    ngOnInit() {
        this.initialCount = this.todoListService.todoItems.length;
    }

    addTodoItem() {
        if (this.newTodo?.length > 0) {
            this.todoListService.add({ title: this.newTodo, id: ++this.initialCount });
            this.newTodo = '';
        }
        this.newTodoInput.nativeElement.focus();
    }

    onRemoved(id: number) {
        this.todoListService.remove(id);
    }
}