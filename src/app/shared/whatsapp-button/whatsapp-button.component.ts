import { Component, input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css',
})
export class WhatsappButton {
  /** Número en formato internacional sin + ni espacios. Ej: 51942678678 */
  phone = input<string>('51942678678');
  /** Texto pre-cargado en el chat */
  message = input<string>('Hola, me gustaría obtener más información sobre sus servicios.');

  protected encodedMessage(): string {
    return encodeURIComponent(this.message());
  }
}
