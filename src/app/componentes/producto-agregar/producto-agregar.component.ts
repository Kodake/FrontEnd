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

  producto: Producto = new Producto();

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
}
