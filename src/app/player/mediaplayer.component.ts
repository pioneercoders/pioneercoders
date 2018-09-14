import { Component } from "@angular/core";
import { TutorilaService} from "../service/tutorialservice";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Topic } from '../service/topic';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'mediaplayer',
    templateUrl: './mediaplayer.component.html',
    styleUrls: [ ]
})
export class MediaPlayerComponent {

    sources: Array<Object>;
    topicDetails: Topic = {
        "id": 1,
        "title": "Cisco UCCX Overview and packaging",
        "description": "Overview about the product",
        "videoURL": "https://www.youtube.com/watch?v=rVucuobUwko",
        "videoType": "mp4",
        "videoID": "avc"
    };
    constructor(private activeRoute: ActivatedRoute,
        private tutorilaService: TutorilaService,
        private _sanitizer: DomSanitizer) {
        
        this._sanitizer.bypassSecurityTrustResourceUrl(this.topicDetails.videoURL);

    }

    ngOnInit () {
        this.activeRoute.parent.params.subscribe(params => console.log('parent media comp:', params)); // Object {artistId: 12345}
        this.activeRoute.params.subscribe(params => console.log('child media comp:', params));
        let topicId = parseInt(this.activeRoute.snapshot.paramMap.get('topicId'));
        console.log('[HK] topic Id>>', topicId);
        
    }
}
