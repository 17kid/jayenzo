import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-gaming',
  standalone: true,
  imports: [NavbarComponent, YouTubePlayer],
  templateUrl: './gaming.component.html',
})



export class GamingComponent implements OnInit, AfterViewInit {


  @ViewChild('youtubePlayer')youtubePlayerVariable!: ElementRef;

  videoHeight: number | undefined;
  videoWidth: number | undefined;



  ngOnInit() {

  }

  ngAfterViewInit(): void {
    console.log('yt variable', this.youtubePlayerVariable);
  }

  onResize() {

  }
}
