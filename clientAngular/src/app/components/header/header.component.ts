import { Component } from '@angular/core';
import { IconDefinition, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isAuth: boolean = false
  logoutIcon: IconDefinition = faArrowRightFromBracket
}
