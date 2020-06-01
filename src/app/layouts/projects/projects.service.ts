import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private afs: AngularFirestore) {}

  getProjects() {
    return this.afs.collection('projects').valueChanges();
  }
}
