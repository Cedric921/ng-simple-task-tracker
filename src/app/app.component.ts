import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exo1';
  bgColor = 'grey';
  hide = false;
  theme = 'dark';

  changeTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.hide = !this.hide;
  }

  changeColor(input: HTMLInputElement) {
    this.bgColor = input.value;
    input.value = '';
  }
}
