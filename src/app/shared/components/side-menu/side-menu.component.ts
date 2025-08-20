import { Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

type MenuItem = {
  title: string;
  route: string;
};

const reactiveItems = reactiveRoutes.at(0)?.children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  reactiveMenu: MenuItem[] = reactiveItems
    .filter((item) => item.path !== '**')
    .map((item) => ({
      route: `/reactive/${item.path}`,
      title: `${item.title}`,
    }));

  authMenu: MenuItem[] = [
    {
      route: '/auth',
      title: 'Registro',
    },
  ];
  countryMenu: MenuItem[] = [
    {
      route: '/country',
      title: 'Países',
    },
  ];
}
