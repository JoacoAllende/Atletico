import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NavService } from './services/nav.service';
import { VERSION } from '@angular/material';
import { NavItem } from './models/nav-item';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer', null) appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'Inicio',
      route: '/inicio',
    },
    {
      displayName: 'Torneo Nacional',
      children: [
        {
          displayName: 'Cat. 2008',
          children: [
            {
              displayName: 'Fase de grupos',
              route: '/grupos/0/2021',
            },
            {
              displayName: 'Copa de Oro',
              route: '/copa/oro/0/2021',
            },
            {
              displayName: 'Copa de Plata',
              route: '/copa/plata/0/2021',
            },
            {
              displayName: 'Goleadores',
              route: '/goleadores/0/2021',
            },
            {
              displayName: 'Vallas Invictas',
              route: '/vallaInvicta/0/2021',
              private: true,
            },
            {
              displayName: 'Tarjetas',
              route: '/tarjetas/0/2021',
              private: true,
            }
          ]
        },
        {
          displayName: 'Cat. 2009',
          children: [
            {
              displayName: 'Fase de grupos',
              route: '/grupos/0/2022',
            },
            {
              displayName: 'Copa de Oro',
              route: '/copa/oro/0/2022',
            },
            {
              displayName: 'Copa de Plata',
              route: '/copa/plata/0/2022',
            },
            {
              displayName: 'Goleadores',
              route: '/goleadores/0/2022',
            },
            {
              displayName: 'Vallas Invictas',
              route: '/vallaInvicta/0/2022',
              private: true,
            },
            {
              displayName: 'Tarjetas',
              route: '/tarjetas/0/2022',
              private: true,
            }
          ]
        }
      ],
    },
    {
      displayName: 'Torneo Paralelo',
      children: [
        {
          displayName: 'Cat. 2010',
          children: [
            {
              displayName: 'Fase de grupos',
              route: '/grupos/1/2021',
            },
            {
              displayName: 'Copa de Oro',
              route: '/copa/oro/1/2021',
            },
            {
              displayName: 'Goleadores',
              route: '/goleadores/1/2021',
            },
            {
              displayName: 'Vallas Invictas',
              route: '/vallaInvicta/1/2021',
              private: true,
            },
            {
              displayName: 'Tarjetas',
              route: '/tarjetas/1/2021',
              private: true,
            }
          ]
        },
        {
          displayName: 'Cat. 2011',
          children: [
            {
              displayName: 'Fase de grupos',
              route: '/grupos/1/2022',
            },
            {
              displayName: 'Copa de Oro',
              route: '/copa/oro/1/2022',
            },
            {
              displayName: 'Goleadores',
              route: '/goleadores/1/2022',
            },
            {
              displayName: 'Vallas Invictas',
              route: '/vallaInvicta/1/2022',
              private: true,
            },
            {
              displayName: 'Tarjetas',
              route: '/tarjetas/1/2022',
              private: true,
            }
          ]
        }
      ]
    },
    {
      displayName: 'Torneo Femenino',
      children: [
        {
          displayName: 'Fase de grupos',
          route: '/grupos/2/2022',
        },
        {
          displayName: 'Copa de Oro',
          route: '/copa/oro/2/2022',
        },
        {
          displayName: 'Goleadores',
          route: '/goleadores/2/2022',
        },
        {
          displayName: 'Vallas Invictas',
          route: '/vallaInvicta/2/2022',
          private: true,
        },
        {
          displayName: 'Tarjetas',
          route: '/tarjetas/2/2022',
          private: true,
        }
      ]
    },
    {
      displayName: 'Torneos pasados',
      children: [
        {
          displayName: 'Torneo Nacional',
          children: [
            {
              displayName: '2020',
              children: [
                {
                  displayName: 'Fase de grupos',
                  route: '/grupos/0/2020',
                },
                {
                  displayName: 'Copa de Oro',
                  route: '/copa/oro/0/2020',
                },
                {
                  displayName: 'Copa de Plata',
                  route: '/copa/plata/0/2020',
                },
                {
                  displayName: 'Goleadores',
                  route: '/goleadores/0/2020',
                },
                {
                  displayName: 'Vallas Invictas',
                  route: '/vallaInvicta/0/2020',
                  private: true,
                },
                {
                  displayName: 'Tarjetas',
                  route: '/tarjetas/0/2020',
                  private: true,
                }
              ]
            },
            {
              displayName: '2019',
              children: [
                {
                  displayName: 'Fase de grupos',
                  route: '/grupos/0/2019',
                },
                {
                  displayName: 'Copa de Oro',
                  route: '/copa/oro/0/2019',
                },
                {
                  displayName: 'Copa de Plata',
                  route: '/copa/plata/0/2019',
                },
                {
                  displayName: 'Goleadores',
                  route: '/goleadores/0/2019',
                },
                {
                  displayName: 'Vallas Invictas',
                  route: '/vallaInvicta/0/2019',
                  private: true,
                },
                {
                  displayName: 'Tarjetas',
                  route: '/tarjetas/0/2019',
                  private: true,
                }
              ]
            },
            {
              displayName: '2018',
              children: [
                {
                  displayName: 'Fase de grupos',
                  route: '/grupos/0/2018',
                },
                {
                  displayName: 'Copa de Oro',
                  route: '/copa/oro/0/2018',
                },
                {
                  displayName: 'Copa de Plata',
                  route: '/copa/plata/0/2018',
                },
                {
                  displayName: 'Goleadores',
                  route: '/goleadores/0/2018',
                },
                {
                  displayName: 'Vallas Invictas',
                  route: '/vallaInvicta/0/2018',
                  private: true,
                },
                {
                  displayName: 'Tarjetas',
                  route: '/tarjetas/0/2018',
                  private: true,
                }
              ]
            }
          ]
        },
        {
          displayName: 'Torneo Paralelo',
          children: [
            {
              displayName: '2020',
              children: [
                {
                  displayName: 'Fase de grupos',
                  route: '/grupos/1/2020',
                },
                {
                  displayName: 'Copa de Oro',
                  route: '/copa/oro/1/2020',
                },
                {
                  displayName: 'Copa de Plata',
                  route: '/copa/plata/1/2020',
                },
                {
                  displayName: 'Goleadores',
                  route: '/goleadores/1/2020',
                },
                {
                  displayName: 'Vallas Invictas',
                  route: '/vallaInvicta/1/2020',
                  private: true,
                },
                {
                  displayName: 'Tarjetas',
                  route: '/tarjetas/1/2020',
                  private: true,
                }
              ]
            },
            {
              displayName: '2019',
              children: [
                {
                  displayName: 'Fase de grupos',
                  route: '/grupos/1/2019',
                },
                {
                  displayName: 'Copa de Oro',
                  route: '/copa/oro/1/2019',
                },
                {
                  displayName: 'Copa de Plata',
                  route: '/copa/plata/1/2019',
                },
                {
                  displayName: 'Goleadores',
                  route: '/goleadores/1/2019',
                },
                {
                  displayName: 'Vallas Invictas',
                  route: '/vallaInvicta/1/2019',
                  private: true,
                },
                {
                  displayName: 'Tarjetas',
                  route: '/tarjetas/1/2019',
                  private: true,
                }
              ]
            },
            {
              displayName: '2018',
              children: [
                {
                  displayName: 'Fase de grupos',
                  route: '/grupos/1/2018',
                },
                {
                  displayName: 'Copa de Oro',
                  route: '/copa/oro/1/2018',
                },
                {
                  displayName: 'Copa de Plata',
                  route: '/copa/plata/1/2018',
                },
                {
                  displayName: 'Goleadores',
                  route: '/goleadores/1/2018',
                },
                {
                  displayName: 'Vallas Invictas',
                  route: '/vallaInvicta/1/2018',
                  private: true,
                },
                {
                  displayName: 'Tarjetas',
                  route: '/tarjetas/0/2018',
                  private: true,
                }
              ]
            }
          ]
        }
      ]
    },
    {
      displayName: 'Historia',
      route: '/historia',
    },
    {
      displayName: 'Jugadores',
      route: '/jugadores',
    },
    {
      displayName: 'Coordinadores',
      route: '/coordinadores',
    }
  ];

  constructor(private navService: NavService, private router: Router) {
    const navEndEvents$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      );

    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-157909851-1', {
        'page_path': event.urlAfterRedirects
      });
    });
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
