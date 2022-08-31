// Project Imports
import {
    Component,
    OnInit,
    Input
} from '@angular/core'

export interface IInfoCardSlide {
    /**
     * The slide title
     *
     */
    title: string

    /**
     * The slide description paragraph
     *
     */
    description: string
}

// Component Dec
@Component({
    selector: 'snippet-info-card-slide',
    templateUrl: './info-card-slide.component.html',
    styleUrls: ['./info-card-slide.component.scss']
})

// Component Exports
export class InfoCardSlideComponent implements OnInit {
    // Inputs
    @Input() slide: IInfoCardSlide

    // Constructor
    constructor() {}

    // Lifecycles
    ngOnInit(): void {}
}
