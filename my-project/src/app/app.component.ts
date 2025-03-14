import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-project';

  toggleDarkMode() {
    console.log("theme is changed!");
    
    const element = document.querySelector('html');
    if (element !== null) {
      element.classList.toggle('my-app-dark');
    }
  }
}
