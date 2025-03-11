import { inject, Injectable } from '@angular/core';
import { Cancion } from '../models/canciones.model';
import { first } from 'rxjs';
import { collection, collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, doc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  private db: Firestore = inject(Firestore);

  constructor() { }

  // Método para obtener todas las canciones
  getCanciones() {
    const cancionesCollection = collection(this.db, 'canciones');
    return collectionData(cancionesCollection, { idField: 'id' }).pipe(first());
  }

  // Método para agregar una canción
  agregarCancion(cancion: Cancion) {
    const cancionesCollection = collection(this.db, 'canciones');
    const cancionData = {
      nombre: cancion.nombre,
      duracion: cancion.duracion
    };
    addDoc(cancionesCollection, cancionData);
  }

  // Método para modificar una canción
  modificarCancion(cancion: Cancion) {
    const documentRef = doc(this.db, 'canciones', cancion.id);
    updateDoc(documentRef, {
      nombre: cancion.nombre,
      duracion: cancion.duracion
    });
  }

  // Método para eliminar una canción
  eliminarCancion(cancion: Cancion) {
    const documentoRef = doc(this.db, 'canciones', cancion.id);
    deleteDoc(documentoRef);
  }
}
