import { Component } from "@angular/core";
import { Topic } from "../service/topic";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'topics',
    templateUrl: './topics.component.html',
    styleUrls: [ ]
})
export class Topics {

    constructor(private activeRoute: ActivatedRoute,) {
        this.activeRoute.params.subscribe(params => console.log('Topics', params));
    }
    
    topics:Topic[] = [{
        "id": 1,
        "title": "Test1",
        "description": "Overview about the product",
        "videoURL": "https://www.youtube.com/watch?v=rVucuobUwko",
        "videoType": "mp4",
        "videoID": "rVucuobUwko"
      },{
        "id": 2,
        "title": "Test2",
        "description": "ccx call flow",
        "videoURL": "https://www.youtube.com/watch?v=rVucuobUwko",
        "videoType": "mp4",
        "videoID": "O-nGaQTyJlA"
      }];
}
