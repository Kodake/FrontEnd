import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Producto } from '../../modelos/producto';
import { ProductoService } from '../../servicios/producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-agregar',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './producto-agregar.component.html',
  styleUrl: './producto-agregar.component.css'
})
export class ProductoAgregarComponent {

  producto: Producto = {
    idProducto: 0,
    descripcion: '',
    precio: 0,
    existencia: 0
  }

  constructor(private productoServicio: ProductoService, private enrutador: Router) { }

  onSubmit() {
    this.guardar();
  }

  guardar() {
    this.productoServicio.agregar(this.producto).subscribe({
      next: () => {
        this.redireccionar();
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

  redireccionar() {
    this.enrutador.navigate(['/productos']);
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
