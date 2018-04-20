import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
    // trigger('fade', [
    //   transition('void => *', [
    //     style({ opacity: 0 }),
    //     animate(1000)
    //   ]),
    //   transition('* => void', [
    //     animate(1000, style({ opacity: 0 }))
    //   ])
    // ])
  ]
})

export class HomeComponent implements OnInit {
  todos = [
    'Walk the dog',
    'Do homework',
    'Study Angular animations'
  ];
  newTodo: string;

  constructor() { }

  ngOnInit() {
  }

  addNewTodo(form: any) {
    this.todos.unshift(form.value.newTodo);
    form.reset();
  }

  removeTodo(todo: string) {
    this.todos.forEach((current, index) => {
      if (current === todo) {
        this.todos.splice(index, 1);
      }
    });
  }

}
