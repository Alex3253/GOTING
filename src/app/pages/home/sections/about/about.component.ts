import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class About {
  showHeading = input(true);
  protected previewImage = signal<string | null>(null);

  protected openPreview(src: string | null): void {
    this.previewImage.set(src);
  }

  protected closePreview(): void {
    this.previewImage.set(null);
  }

  protected readonly propuestaTrack = viewChild<ElementRef<HTMLDivElement>>('propuestaTrack');

  protected scrollPropuesta(direction: 'left' | 'right'): void {
    const el = this.propuestaTrack()?.nativeElement;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  }

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
    {
      num: '01',
      titulo: 'Estándares PMI · Agilismo',
      desc: 'Gestionamos cada proyecto bajo el marco del PMI y metodologías ágiles, con hitos claros y control total del alcance.',
      iconBg: 'from-sky-400 to-blue-600',
    },
    {
      num: '02',
      titulo: 'Alineado a IGN y DHN',
      desc: 'Nuestros levantamientos cumplen con los lineamientos oficiales del Instituto Geográfico Nacional y la Dirección de Hidrografía y Navegación.',
      iconBg: 'from-teal-400 to-emerald-600',
    },
    {
      num: '03',
      titulo: 'Sistema QA/QC en campo',
      desc: 'Protocolos de control y aseguramiento de calidad aplicados en cada etapa de campo y gabinete, minimizando errores y reprocesos.',
      iconBg: 'from-lime-400 to-green-600',
    },
    {
      num: '04',
      titulo: 'Sensores LiDAR · RGB Multiespectral',
      desc: 'Equipos de última generación con sensores LiDAR, RGB y multiespectrales para capturar datos de alta densidad y precisión.',
      iconBg: 'from-violet-400 to-purple-600',
    },
    {
      num: '05',
      titulo: 'Cámara CMOS 4/3"',
      desc: 'Sensores de gran formato que permiten ortomosaicos de altísima resolución incluso en condiciones de poca luz.',
      iconBg: 'from-amber-400 to-orange-600',
    },
  ];

  protected readonly clientes = [
    { logo: '/fondepes.png', alt: 'FONDEPES' },
    { logo: '/lader.png', alt: 'Lader Energy' },
    { logo: '/green.jpeg', alt: 'Green' },
    { logo: '/yaku.png', alt: 'Yaku Consultores' },
    { logo: '/aacosta.jpeg', alt: 'AACosta Inmobiliaria' },
    { logo: '/palmas.png', alt: 'Palmas' },
  ];
}
