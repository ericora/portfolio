import { Component, OnInit, Input } from '@angular/core';

export interface Project {
  description: string;
  displayName: string;
  image: string;
  techs: string[];
  url: string;
}

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  constructor() {}

  ngOnInit(): void {}
}
