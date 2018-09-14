import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'play-youtube-video',
  templateUrl: './youtube-player.component.html'
})
export class YoutubePlayerComponent {
  
  constructor(private activeRoute: ActivatedRoute){

  }
  player: YT.Player;
  
  @Input()
  private id: string;
 
  ngOnInit () {
    this.activeRoute.parent.params.subscribe(params => console.log('parent media comp:', params)); // Object {artistId: 12345}
    this.activeRoute.params.subscribe(params => console.log('child media comp:', params));
    let topicId =this.activeRoute.snapshot.paramMap.get('topicId');
    console.log('[HK] topic Id>>', topicId);
    this.id= topicId;
  }
  
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}