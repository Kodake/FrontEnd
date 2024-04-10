import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoListaComponent } from './componentes/producto-lista/producto-lista.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavegacionComponent, ProductoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
}
