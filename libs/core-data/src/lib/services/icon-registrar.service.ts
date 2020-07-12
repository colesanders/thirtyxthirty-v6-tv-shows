import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const BASE_URL = "/assets/";

@Injectable({
  providedIn: 'root'
})
export class IconRegistrarService {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  registerSVGs(): void{
    this.matIconRegistry.addSvgIcon('thirty-grade', 
      this.domSanitizer.bypassSecurityTrustResourceUrl(BASE_URL + "grade-24px.svg"));
    this.matIconRegistry.addSvgIcon('thirty-star', 
      this.domSanitizer.bypassSecurityTrustResourceUrl(BASE_URL + "star_rate-24px.svg"));
  }
}
