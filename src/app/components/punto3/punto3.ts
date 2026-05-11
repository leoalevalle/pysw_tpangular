import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrls: ['./punto3.css']
})
export class Punto3 {

  cartas: any[] = [];

  cartasSeleccionadas: any[] = [];

  intentos: number = 10;

  puedeIntentar: boolean = false;

  juegoIniciado: boolean = false;

  emojis = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒'];

  iniciarJuego() {

    this.juegoIniciado = true;

    const parejas = [...this.emojis, ...this.emojis];

    this.cartas = parejas
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji: emoji,
        descubierta: false
      }));

    this.cartasSeleccionadas = [];

    this.intentos = 10;

    this.puedeIntentar = false;
  }

  reiniciarJuego() {
    this.iniciarJuego();
  }

  intentar() {

    if(this.intentos > 0){
      this.puedeIntentar = true;
    }

  }

  seleccionarCarta(carta: any) {

    if (!this.juegoIniciado) return;

    if (!this.puedeIntentar) return;

    if (carta.descubierta) return;

    if (this.cartasSeleccionadas.length >= 2) return;

    carta.descubierta = true;

    this.cartasSeleccionadas.push(carta);

    if (this.cartasSeleccionadas.length == 2) {

      this.puedeIntentar = false;

      setTimeout(() => {

        const [c1, c2] = this.cartasSeleccionadas;

        if (c1.emoji !== c2.emoji) {

          c1.descubierta = false;
          c2.descubierta = false;

          this.intentos--;
        }

        this.cartasSeleccionadas = [];

      }, 1000);
    }
  }

  juegoGanado(): boolean {

    return this.cartas.length > 0 &&
           this.cartas.every(c => c.descubierta);

  }

}