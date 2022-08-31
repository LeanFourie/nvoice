// Project Imports
import {
    Component,
    OnInit,
    Input
} from '@angular/core'
import SwiperCore, {
    Keyboard,
    Pagination,
    Navigation,
    Virtual
} from 'swiper'

// Interface
import { IInfoCardSlide } from './../../snippets/info-card-slide/info-card-slide.component'

SwiperCore.use([
    Keyboard,
    Pagination,
    Navigation,
    Virtual
])

// Component Dec
@Component({
    selector: 'common-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})

// Component Exports
export class CarouselComponent implements OnInit {
    // Inputs
    @Input() slides: IInfoCardSlide[]

    // Constructor
    constructor() {}

    // Lifecycles
    ngOnInit(): void {}
}
