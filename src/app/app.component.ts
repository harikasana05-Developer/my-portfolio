import { Component } from '@angular/core';
import { IntroComponent } from "./components/intro/intro.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [IntroComponent, AboutComponent, SkillsComponent, ContactComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
}
