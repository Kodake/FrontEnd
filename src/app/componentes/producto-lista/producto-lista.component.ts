import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { ProductoService } from '../../servicios/producto.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent implements OnInit {
  productos: Producto[];

  constructor(private productoServicio: ProductoService) { }

  ngOnInit() {
    this.listar();
  }

  private listar() {
    this.productoServicio.listar().subscribe(data => {
      this.productos = data;
    })
  }

  eliminar(id: number) {
    this.productoServicio.eliminar(id).subscribe(
      {
        next: () => {
          this.listar();
        },
        error: (error) => {
          console.log(error);
        }
      }
    )
  }
}