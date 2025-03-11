import { Component } from '@angular/core';
import { Cancion } from '../../models/canciones.model';
import { CancionService } from '../../services/canciones.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-cancion',
  imports: [FormsModule],
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css'],
})
export class CancionComponent {
  // Propiedades
  canciones: any;
  cancion = new Cancion();

  constructor(private cancionService: CancionService) {
    this.getCanciones();
  }

  // Método para obtener el listado de canciones
  async getCanciones(): Promise<void> {
    this.canciones = await firstValueFrom(this.cancionService.getCanciones());
  }

  // Método para insertar una canción desde el formulario
  insertarCancion() {
    this.cancionService.agregarCancion(this.cancion);
    this.cancion = new Cancion();
    this.getCanciones();
  }

  // Método para seleccionar una canción de la tabla
  selectCancion(cancionSeleccionada: Cancion) {
    this.cancion = cancionSeleccionada;
  }

  // Método para modificar una canción desde el formulario
  updateCancion() {
    this.cancionService.modificarCancion(this.cancion);
    this.cancion = new Cancion();
    this.getCanciones();
  }

  // Método para eliminar una canción
  deleteCancion() {
    this.cancionService.eliminarCancion(this.cancion);
    this.getCanciones();
  }


  
}
