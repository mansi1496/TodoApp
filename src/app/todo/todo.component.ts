import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, style, group, query, animate, stagger, animateChild } from '@angular/animations';
import { slideInAnimation, slideOutAnimation, moveDown } from '../animation';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    trigger('todoAnimations', [
      transition(':enter', [
        group([
          query('h1',[
            useAnimation(moveDown)
          ]),
          query('input',[ 
            useAnimation(moveDown)
          ]),
          query('@todoItem',
            stagger(100, animateChild()))
        ])
      ])
    ]),

    trigger('todoItem', [
      transition(':enter', [
       useAnimation(slideInAnimation)
      ]),
      transition(':leave', [
        style({ backgroundColor: '#df3920' }),
        useAnimation(slideOutAnimation)
      ]),
    ]),
  
    trigger('todosWrapper', [
      transition(':enter', [
      group([
        query('h1', [
          style({ opacity: 0 }),
          animate(300)
        ]),
        query('input', [
          style({ opacity: 0 }),
          animate(300)
        ]),
        query('@todoItem',
          stagger(200, animateChild())
        )
      ])
  
      ])
    ]),
     
    ]
  })
export class TodoComponent implements OnInit {

  todos = [
    {
      item : 'Take dog to vet',
      due : new Date(),
    },
    {
      item : 'Take dog to vet',
      due : new Date(),
    },
    {
      item : 'Take dog to vet',
      due : new Date(),
    },
    {
      item : 'Take dog to vet',
      due : new Date(),
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(input : HTMLInputElement){
    this.todos = [{item : input.value, due : new Date()}, ...this.todos];
    input.value;
  }
  
  removeTodo(i){
    this.todos.splice(i,1)
  }

}
