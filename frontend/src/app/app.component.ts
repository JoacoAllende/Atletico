import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavService } from './services/nav.service';
import { VERSION } from '@angular/material';
import { NavItem } from './models/nav-item';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { GlobalService } from './services/global.service';
import { AuthService } from './services/auth.service';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appDrawer', null) appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'Inicio',
      route: '/inicio',
    },
    {
      displayName: 'Nacional 2025',
      children: [
        {
          displayName: 'Fase de grupos',
          route: '/grupos/0/2025',
        },
        {
          displayName: 'Copa de Oro',
          route: '/copa/oro/0/2025',
        },
        {
          displayName: 'Copa de Plata',
          route: '/copa/plata/0/2025',
        },
        {
          displayName: 'Goleadores',
          route: '/goleadores/0/2025',
        },
        {
          displayName: 'Vallas Invictas',
          route: '/vallaInvicta/0/2025',
          private: true,
        },
        {
          displayName: 'Tarjetas',
          route: '/tarjetas/0/2025',
          private: true,
        }
      ]
    },
    {
      displayName: 'Paralelo 2025',
      children: [
        {
          displayName: 'Cat. 2013',
          children: [
            {
              displayName: 'Fase de grupos',
              route: '/grupos/3/2025',
            },
            {
              displayName: 'Copa de Oro',
              route: '/copa/oro/3/2025',
            },
            {
              displayName: 'Copa de Plata',
              route: '/copa/plata/3/2025',
            },
            {
              displayName: 'Goleadores',
              route: '/goleadores/3/2025',
            },
            {
              displayName: 'Vallas Invictas',
              route: '/vallaInvicta/3/2025',
              private: true,
            },
            {
              displayName: 'Tarjetas',
              route: '/tarjetas/3/2025',
              private: true,
            }
          ]
        },
        {
          displayName: 'Cat. 2014',

          children: [
            {
              displayName: 'Fase de grupos',
              route: '/grupos/1/2025',
            },
            {
              displayName: 'Copa de Oro',
              route: '/copa/oro/1/2025',
            },
            {
              displayName: 'Copa de Plata',
              route: '/copa/plata/1/2025',
            },
            {
              displayName: 'Goleadores',
              route: '/goleadores/1/2025',
            },
            {
              displayName: 'Vallas Invictas',
              route: '/vallaInvicta/1/2025',
              private: true,
            },
            {
              displayName: 'Tarjetas',
              route: '/tarjetas/1/2025',
              private: true,
            }
          ]
        },
        {
          displayName: 'Cat. 2015',
          children: [
            {
              displayName: 'Fase de grupos',
              route: '/grupos/4/2025',
            },
            {
              displayName: 'Copa de Oro',
              route: '/copa/oro/4/2025',
            },
            {
              displayName: 'Copa de Plata',
              route: '/copa/plata/4/2025',
            },
            {
              displayName: 'Goleadores',
              route: '/goleadores/4/2025',
            },
            {
              displayName: 'Vallas Invictas',
              route: '/vallaInvicta/4/2025',
              private: true,
            },
            {
              displayName: 'Tarjetas',
              route: '/tarjetas/4/2025',
              private: true,
            }
          ]
        },
      ]
    },
    {
      displayName: 'Femenino 2025',
      children: [
        {
          displayName: 'Fase de grupos',
          route: '/grupos/2/2025',
        },
        {
          displayName: 'Copa de Oro',
          route: '/copa/oro/2/2025',
        },
        {
          displayName: 'Copa de Plata',
          route: '/copa/plata/2/2025',
        },
        {
          displayName: 'Goleadores',
          route: '/goleadores/2/2025',
        },
        {
          displayName: 'Vallas Invictas',
          route: '/vallaInvicta/2/2025',
          private: true,
        },
        {
          displayName: 'Tarjetas',
          route: '/tarjetas/2/2025',
          private: true,
        }
      ]
    },
    {
      displayName: 'Torneos anteriores',
      children: [
        {
          displayName: 'Torneo Nacional',
          children: [
            {
              displayName: '2024',
              children: [
                {
                  displayName: 'Fase de grupos',
                  route: '/grupos/0/2024',
                },
                {
                  displayName: 'Copa de Oro',
                  route: '/copa/oro/0/2024',
                },
                {
                  displayName: 'Copa de Plata',
                  route: '/copa/plata/0/2024',
                },
                {
                  displayName: 'Goleadores',
                  route: '/goleadores/0/2024',
                },
                {
                  displayName: 'Vallas Invictas',
                  route: '/vallaInvicta/0/2024',
                  private: true,
                },
                {
                  displayName: 'Tarjetas',
                  route: '/tarjetas/0/2024',
                  private: true,
                }
              ]
            },
            {
              displayName: '2023',
              children: [
                {
                  displayName: 'Fase de grupos',
                  route: '/grupos/0/2023',
                },
                {
                  displayName: 'Copa de Oro',
                  route: '/copa/oro/0/2023',
                },
                {
                  displayName: 'Copa de Plata',
                  route: '/copa/plata/0/2023',
                },
                {
                  displayName: 'Goleadores',
                  route: '/goleadores/0/2023',
                },
                {
                  displayName: 'Vallas Invictas',
                  route: '/vallaInvicta/0/2023',
                  private: true,
                },
                {
                  displayName: 'Tarjetas',
                  route: '/tarjetas/0/2023',
                  private: true,
                }
              ]
            },
            {
              displayName: '2022',
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
                },
              ]
            },
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
              displayName: '2024',
              children: [
                {
                  displayName: 'Cat. 2012',
                  children: [
                    {
                      displayName: 'Fase de grupos',
                      route: '/grupos/3/2024',
                    },
                    {
                      displayName: 'Copa de Oro',
                      route: '/copa/oro/3/2024',
                    },
                    {
                      displayName: 'Copa de Plata',
                      route: '/copa/plata/3/2024',
                    },
                    {
                      displayName: 'Goleadores',
                      route: '/goleadores/3/2024',
                    },
                    {
                      displayName: 'Vallas Invictas',
                      route: '/vallaInvicta/3/2024',
                      private: true,
                    },
                    {
                      displayName: 'Tarjetas',
                      route: '/tarjetas/3/2024',
                      private: true,
                    }
                  ]
                },
                {
                  displayName: 'Cat. 2013',
                  children: [
                    {
                      displayName: 'Fase de grupos',
                      route: '/grupos/1/2024',
                    },
                    {
                      displayName: 'Copa de Oro',
                      route: '/copa/oro/1/2024',
                    },
                    {
                      displayName: 'Copa de Plata',
                      route: '/copa/plata/1/2024',
                    },
                    {
                      displayName: 'Goleadores',
                      route: '/goleadores/1/2024',
                    },
                    {
                      displayName: 'Vallas Invictas',
                      route: '/vallaInvicta/1/2024',
                      private: true,
                    },
                    {
                      displayName: 'Tarjetas',
                      route: '/tarjetas/1/2024',
                      private: true,
                    }
                  ]
                },
                {
                  displayName: 'Cat. 2014',
                  children: [
                    {
                      displayName: 'Fase de grupos',
                      route: '/grupos/4/2024',
                    },
                    {
                      displayName: 'Copa de Oro',
                      route: '/copa/oro/4/2024',
                    },
                    {
                      displayName: 'Goleadores',
                      route: '/goleadores/4/2024',
                    },
                    {
                      displayName: 'Vallas Invictas',
                      route: '/vallaInvicta/4/2024',
                      private: true,
                    },
                    {
                      displayName: 'Tarjetas',
                      route: '/tarjetas/4/2024',
                      private: true,
                    }
                  ]
                },
              ]
            },
            {
              displayName: '2023',
              children: [
                {
                  displayName: 'Cat. 2011',
                  children: [
                    {
                      displayName: 'Fase de grupos',
                      route: '/grupos/3/2023',
                    },
                    {
                      displayName: 'Copa de Oro',
                      route: '/copa/oro/3/2023',
                    },
                    {
                      displayName: 'Copa de Plata',
                      route: '/copa/plata/3/2023',
                    },
                    {
                      displayName: 'Goleadores',
                      route: '/goleadores/3/2023',
                    },
                    {
                      displayName: 'Vallas Invictas',
                      route: '/vallaInvicta/3/2023',
                      private: true,
                    },
                    {
                      displayName: 'Tarjetas',
                      route: '/tarjetas/3/2023',
                      private: true,
                    }
                  ]
                },
                {
                  displayName: 'Cat. 2012',
                  children: [
                    {
                      displayName: 'Fase de grupos',
                      route: '/grupos/1/2023',
                    },
                    {
                      displayName: 'Copa de Oro',
                      route: '/copa/oro/1/2023',
                    },
                    {
                      displayName: 'Copa de Plata',
                      route: '/copa/plata/1/2023',
                    },
                    {
                      displayName: 'Goleadores',
                      route: '/goleadores/1/2023',
                    },
                    {
                      displayName: 'Vallas Invictas',
                      route: '/vallaInvicta/1/2023',
                      private: true,
                    },
                    {
                      displayName: 'Tarjetas',
                      route: '/tarjetas/1/2023',
                      private: true,
                    }
                  ]
                },
                {
                  displayName: 'Cat. 2013',
                  children: [
                    {
                      displayName: 'Fase de grupos',
                      route: '/grupos/4/2023',
                    },
                    {
                      displayName: 'Copa de Oro',
                      route: '/copa/oro/4/2023',
                    },
                    {
                      displayName: 'Copa de Plata',
                      route: '/copa/plata/4/2023',
                    },
                    {
                      displayName: 'Goleadores',
                      route: '/goleadores/4/2023',
                    },
                    {
                      displayName: 'Vallas Invictas',
                      route: '/vallaInvicta/4/2023',
                      private: true,
                    },
                    {
                      displayName: 'Tarjetas',
                      route: '/tarjetas/4/2023',
                      private: true,
                    }
                  ]
                },
              ]
            },
            {
              displayName: '2022',
              children: [
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
                      displayName: 'Copa de Plata',
                      route: '/copa/plata/1/2022',
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
                },
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
                      displayName: 'Copa de Plata',
                      route: '/copa/plata/1/2021',
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
              ]
            },
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
        },
        {
          displayName: 'Torneo Femenino',
          children: [
            {
              displayName: '2024',
              children: [
                {
                  displayName: 'Fase de grupos',
                  route: '/grupos/2/2024',
                },
                {
                  displayName: 'Copa de Oro',
                  route: '/copa/oro/2/2024',
                },
                {
                  displayName: 'Goleadores',
                  route: '/goleadores/2/2024',
                },
                {
                  displayName: 'Vallas Invictas',
                  route: '/vallaInvicta/2/2024',
                  private: true,
                },
                {
                  displayName: 'Tarjetas',
                  route: '/tarjetas/2/2024',
                  private: true,
                }
              ]
            },
            {
              displayName: '2023',
              children: [
                {
                  displayName: 'Fase de grupos',
                  route: '/grupos/2/2023',
                },
                {
                  displayName: 'Goleadores',
                  route: '/goleadores/2/2023',
                },
                {
                  displayName: 'Vallas Invictas',
                  route: '/vallaInvicta/2/2023',
                  private: true,
                },
                {
                  displayName: 'Tarjetas',
                  route: '/tarjetas/2/2023',
                  private: true,
                }
              ]
            },
            {
              displayName: '2022',
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
                  displayName: 'Copa de Plata',
                  route: '/copa/plata/2/2022',
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
            }
          ]
        }
      ]
    },
    // {
    //   displayName: 'Historia',
    //   route: '/historia',
    // },
    // {
    //   displayName: 'Jugadores',
    //   route: '/jugadores',
    // },
    // {
    //   displayName: 'Coordinadores',
    //   route: '/coordinadores',
    // }
  ];

  constructor(private navService: NavService, private router: Router, private globalService: GlobalService, public authService: AuthService) {
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

  ngOnInit() {
    const storedToken = localStorage.getItem('ACCESS_TOKEN');
    if (storedToken && !this.authService.isTokenExpired()) {
      this.globalService.activo = true;
    }
    this.navService.setMenuItems(this.navItems);
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
