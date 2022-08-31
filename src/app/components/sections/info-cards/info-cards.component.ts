// Project Imports
import {
    Component,
    OnInit
} from '@angular/core'

// Interface
import { IInfoCardSlide } from './../../snippets/info-card-slide/info-card-slide.component'

// Component Decl
@Component({
    selector: 'section-info-cards',
    templateUrl: './info-cards.component.html',
    styleUrls: ['./info-cards.component.scss']
})

// Component Exports
export class InfoCardsComponent implements OnInit {
    // Variables
    designSlides: IInfoCardSlide[] = [
        {
            title: 'Drag and Drop',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'Another Benefit',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'Some Third Benefit',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ]

    // Constructor
    constructor() {}

    // Lifecycles
    ngOnInit(): void {}
}
