import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ ]
})
export class AppHeader {
    courses: object[] = [{"id": "1", "title": "C"},
    {"id": "2", "title": "C++"},
    {"id": "3", "title": "Java"},
    {"id": "4", "title": "Node"}];
}
