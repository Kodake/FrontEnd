import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';
import { Producto } from '../../modelos/producto';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-editar',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './producto-editar.component.html',
  styleUrl: './producto-editar.component.css'
})
export class ProductoEditarComponent implements OnInit {
  producto: Producto = new Producto();
  id: number;

  constructor(private productoServicio: ProductoService, private ruta: ActivatedRoute, private enrutador: Router) { }

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerPorId(this.id).subscribe(
      {
        next: (data) => {
          this.producto = data;
        },
        error: (error: any) => {
          console.log(error)
        }
      }
    )
  }

  onSubmit() {
    this.modificar();
  }

  modificar() {
    this.productoServicio.editar(this.id, this.producto).subscribe(
      {
        next: () => {
          this.redireccionar();
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    )
  }

  redireccionar() {
    this.enrutador.navigate(['/productos'])
  }

  checkInputNumber() {
    if (!this.producto.precio) {
      this.producto.precio = 0;
    }

    if (!this.producto.existencia) {
      this.producto.existencia = 0;
    }
  }
}
