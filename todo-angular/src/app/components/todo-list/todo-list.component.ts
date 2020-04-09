import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
    todoItems: TodoItem[];
    newTodo: string = '';
    initialCount: number = 0;
    @ViewChild('newTodoInput') newTodoInput: ElementRef;

    constructor(
        private todoListService: TodoListService
    ) { }

    ngOnInit() {
        this.todoItems = this.todoListService.todoItems;
        this.initialCount = this.todoItems.length;
    }

    addTodoItem() {
        if (this.newTodo?.length > 0) {
            this.todoItems.push({ title: this.newTodo, id: ++this.initialCount })
            this.newTodo = '';
            this.newTodoInput.nativeElement.focus();
        }
    }

    onRemoved(id: number) {
        this.todoItems = this.todoItems.filter(t => t.id !== id);
    }
}