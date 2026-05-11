import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definimos la estructura del objeto (Buenas prácticas de TypeScript)
export interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  precio: number;
}

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})

export class Punto2 {
  
  // Array predefinido de productos (Fuente de datos)
  productos: Producto[] = [
    { nombre: 'Notebook Asus 13L', descripcion: 'Disco 40GB, 15 pulgadas', img: 'notebook13l.jpg', precio: 450.5 },
    { nombre: 'Monitor LG 14', descripcion: 'Monitor LED Full HD', img: 'monitorlg.jpg', precio: 99.0 },
    { nombre: 'Teclado Mecánico Redragon', descripcion: 'Switches Blue, RGB', img: 'teclado.jpg', precio: 35.0 },
    { nombre: 'Mouse Logitech G203', descripcion: 'Sensor óptico 8000 DPI', img: 'mouse.jpg', precio: 25.5 }
  ];

  // Array que representará nuestro carrito
  carrito: Producto[] = [];

  // Método para agregar un producto al carrito
  agregarAlCarrito(producto: Producto): void {
    this.carrito.push(producto);
    alert(`${producto.nombre} fue agregado al carrito.`);
  }

  // Uso de Propiedad (Getter) para calcular el total dinámicamente
  get totalCarrito(): number {
    return this.carrito.reduce((acumulador, item) => acumulador + item.precio, 0);
  }
}