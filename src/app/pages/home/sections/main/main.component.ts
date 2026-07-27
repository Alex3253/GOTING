import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class Portada implements OnInit, OnDestroy {
  protected readonly stats = [
    { value: '15+', label: 'Años de experiencia', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: '8k+', label: 'Clientes satisfechos', icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' },
    { value: '20+', label: 'Profesionales', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
    { value: '100%', label: 'Compromiso', icon: 'M9 12.75L11.25 15 15 9.75m6 2.25c0 4.556-3.4 8.315-7.8 8.94a2.998 2.998 0 01-2.4 0C6.4 20.315 3 16.556 3 12V6.75a1.5 1.5 0 011.5-1.5h.75c1.933 0 3.767-.516 5.25-1.5a5.997 5.997 0 015.25 1.5h.75a1.5 1.5 0 011.5 1.5V12z' },
  ];

  protected readonly heroImages = [
    { src: '/img-dr-1.jpeg', position: 'object-center max-sm:object-[100%_50%]' },
    { src: '/img-dr-3.png', position: 'object-[70%_25%]' },
  ];
  protected readonly activeSlide = signal(0);
  private slideTimer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.slideTimer = setInterval(() => {
      this.activeSlide.update((i) => (i + 1) % this.heroImages.length);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.slideTimer) clearInterval(this.slideTimer);
  }

  protected goToSlide(i: number) {
    this.activeSlide.set(i);
  }

  private readonly clientLogos = [
    'client1.png',
    'client2.png',
    'client3.png',
    'client4.png',
    'client5.png',
    'client6.png',
  ];

  protected readonly clientLogosLoop = [...this.clientLogos, ...this.clientLogos];
}
