import { Component } from '@angular/core';
import { IntroComponent } from "./components/intro/intro.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [ RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeSection: 'home' | 'skills' | 'projects' | 'about' = 'home';


  setSection(section: 'home' | 'skills' | 'projects' | 'about') {
    this.activeSection = section;
  }
}
