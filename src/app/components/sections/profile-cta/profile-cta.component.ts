// Project Imports
import {
    Component,
    OnInit
} from '@angular/core'

// Component Decl
@Component({
    selector: 'section-profile-cta',
    templateUrl: './profile-cta.component.html',
    styleUrls: ['./profile-cta.component.scss']
})

// Component Exports
export class ProfileCtaComponent implements OnInit {
    // Variables
    profileItems: { label: string, icon: string }[] = [
        {
            label: 'Personal info',
            icon: 'assets/icons/icon_input.svg'
        },
        {
            label: 'Profile photo',
            icon: 'assets/icons/icon_user-circle.svg'
        },
        {
            label: 'Invoice rate',
            icon: 'assets/icons/icon_money-percentage.svg'
        }
    ]

    // Constructor
    constructor() {}

    // Lifecycles
    ngOnInit(): void {}
}
