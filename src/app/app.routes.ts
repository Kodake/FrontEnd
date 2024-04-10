import { Routes } from '@angular/router';
import { ProductoListaComponent } from './componentes/producto-lista/producto-lista.component';
import { ProductoAgregarComponent } from './componentes/producto-agregar/producto-agregar.component';
import { ProductoEditarComponent } from './componentes/producto-editar/producto-editar.component';

export const routes: Routes = [
    { path: 'productos', component: ProductoListaComponent },
    { path: '', redirectTo: 'productos', pathMatch: 'full' },
    { path: 'productos/agregar', component: ProductoAgregarComponent },
    { path: 'productos/editar/:id', component: ProductoEditarComponent },
];
