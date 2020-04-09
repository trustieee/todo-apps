import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
    @Output() removed = new EventEmitter<number>();
    @Input() item: TodoItem;

    constructor() { }

    ngOnInit() { }

    remove(id: number) {
        this.removed.emit(id);
    }
}