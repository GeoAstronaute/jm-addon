import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jm-hello-world',
  template: '<h1>Hello world from the {{ projectTitle }} module!</h1><button mat-raised-button>Test</button>'
})
export class HelloWorldComponent implements OnInit {
  @Input() app: any;
  @Input() config: any;
  projectTitle: string = 'materia-jm-addon';
  constructor() {}
  ngOnInit() {
    console.log("App :", this.app)
    console.log("Config :", this.config)
  }
}
