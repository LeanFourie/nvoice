// Project Imports
import {
    Component,
    OnInit,
    Input
} from '@angular/core'

// Interface
export interface ILink {
    /**
     * The url the link should link to
     *
     */
    url: string

    /**
     * The link label
     *
     */
    label: string

    /**
     * An option icon for the link
     *
     */
     icon?: string
}

// Component Decl
@Component({
    selector: 'snippet-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss']
})

// Component Exports
export class LinkComponent implements OnInit {
    // Inputs
    @Input() url: ILink[ 'url' ]
    @Input() label: ILink[ 'label' ]
    @Input() icon?: ILink[ 'icon' ]

    // Constructor
    constructor() { }

    // Lifecycles
    ngOnInit(): void {}
}
