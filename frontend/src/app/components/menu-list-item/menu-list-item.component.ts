import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {NavItem} from '../../models/nav-item';
import {Router} from '@angular/router';
import {NavService} from '../../services/nav.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  constructor(public navService: NavService,
              public router: Router, public globals: GlobalService) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      this.navService.closeNav();
    } else {
      item['expanded'] = !item['expanded'];
      this.closeOtherItems(this.navService.getMenuItems(), item);
    }
  }

  closeOtherItems(items: NavItem[], selectedItem: NavItem) {
    items.forEach((item) => {
      if (!this.isAncestorOrDescendant(item, selectedItem)) {
        item['expanded'] = false;
      }
      if (item.children) {
        this.closeOtherItems(item.children, selectedItem);
      }
    });
  }
  
  private isAncestorOrDescendant(item: NavItem, selectedItem: NavItem): boolean {
    if (item === selectedItem) {
      return true;
    }
    if (item.children) {
      return item.children.some((child) => this.isAncestorOrDescendant(child, selectedItem));
    }
    return false;
  }
}
