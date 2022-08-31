// Project Imports
import {
    Component,
    OnInit,
    Input
} from '@angular/core'

// Interface
import { ILink } from '../../snippets/link/link.component'
import { IUser } from '../../snippets/user/user.component'
export interface IHeader {
    /**
     * A set of links used within the header
     *
     */
    links: ILink[]

    /**
     * The user component interface
     *
     */
    user: IUser
}

// Component Decl
@Component({
    selector: 'common-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

// Component Exports
export class HeaderComponent implements OnInit {
    // Inputs
    @Input() links: IHeader[ 'links' ]
    @Input() user: IHeader[ 'user' ]

    // Constructor
    constructor() {}

    // Lifecycles
    ngOnInit(): void {}
}
