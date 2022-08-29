// Project Imports
import {
    Component,
    OnInit,
    Input
} from '@angular/core'

// Interface
export interface IUser {
    /**
     * The logged in username
     *
     */
    username: string

    /**
     * The logged in user photo src
     *
     */
    photo?: string
}

// Component Decl
@Component({
    selector: 'snippet-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

// Component Exports
export class UserComponent implements OnInit {
    // Inputs
    @Input() user: IUser

    // Constructor
    constructor() {}

    // Lifecycles
    ngOnInit(): void {}
}
