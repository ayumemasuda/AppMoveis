import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  logo = 'assets/imagens/welcome.gif'

  constructor() { }

  ngOnInit(): void {
  }

}
