import { Component } from '@angular/core';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card-list',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './project-card-list.component.html',
  styleUrl: './project-card-list.component.css'
})
export class ProjectCardListComponent {
  contents = [
    {title: 'Project Name', description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.', imgUrl: '/project-card-img-1.png'},
    {title: 'Project Name', description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.', imgUrl: '/project-card-img-2.png'},
    {title: 'Project Name', description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.', imgUrl: '/project-card-img-3.png'}
  ]
}
