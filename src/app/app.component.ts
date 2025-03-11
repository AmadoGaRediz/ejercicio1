import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CancionComponent } from "./pages/canciones/canciones.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CancionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejerciciop1';
}
