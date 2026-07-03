import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class About {
  protected readonly misionVision = [
    {
      label: 'Misión',
      text: 'Brindar levantamientos topográficos y datos geoespaciales con exactitud, precisión y compromiso para el desarrollo sostenible de nuestros clientes.',
    },
    {
      label: 'Visión',
      text: 'Ser referentes en precisión y confianza en topografía y geomática con drones, como aliados estratégicos de empresas y entidades públicas.',
    },
  ];

  protected readonly propuestaValor = [
    'Estándares PMI - Agilismo',
    'Alineado a IGN y DHN',
    'Sistema QA/QC en campo',
    'Sensores LiDAR · RGB (Multiespectral)',
    'Cámara CMOS 4/3"',
  ];

  protected readonly clientes = [
    'FONDEPES',
    'Lader Energy',
    'Patrón de Marcapata',
    'Yaku Consultores',
    'AACosta Inmobiliaria',
    'Cobertura Nacional',
  ];
}
