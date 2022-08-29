// Project Imports
import {
    Component,
    OnInit,
    Input
} from '@angular/core'

// Interface
import { ILink } from '../../snippets/link/link.component'
export interface IFooter {
    links: ILink[]
}

// Component Decl
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

// Component Exports
export class FooterComponent implements OnInit {
    // Inputs
    @Input() links: IFooter[ 'links' ]

    // Variables
    date = ( new Date ).toLocaleDateString( 'en-GB', { year: 'numeric' })

    // Constructor
    constructor() {}

    // Lifecycles
    ngOnInit(): void {}
}
