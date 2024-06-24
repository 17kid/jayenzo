import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-gaming',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './gaming.component.html',
})



export class GamingComponent implements OnInit, AfterViewInit {



  videoHeight: number | undefined;
  videoWidth: number | undefined;



  ngOnInit() {

  }

  ngAfterViewInit(): void {
  }

  onResize() {

  }
}
