import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  getPathSegments() {
    const theUrl = this.router.url;
    const urlTree = this.router.parseUrl(theUrl);
    const urlWithoutParams = urlTree.root.children['primary'].segments.map(
      (it) => it.path
    );
    return urlWithoutParams;
  }

  getCurrentPage() {
    return this.getPathSegments()[0];
  }
}
