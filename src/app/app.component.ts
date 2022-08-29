// Project Imports
import { Component } from '@angular/core'

// Interface
import { IHeader } from './components/common/header/header.component'
import { IFooter } from './components/common/footer/footer.component'

// Component Decl
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

// Component Exports
export class AppComponent {
    // Variables
    user: IHeader[ 'user' ] = {
        username: 'John Doe'
    }
    headerLinks: IHeader[ 'links' ] = [
        {
            label: 'Dashboard',
            url: '#'
        },
        {
            label: 'Invoices',
            url: '#'
        },
        {
            label: 'Design',
            url: '#'
        },
        {
            label: 'Branding',
            url: '#'
        }
    ]
    footerLinks: IFooter[ 'links' ] = [
        {
            label: `FAQ's`,
            url: '#'
        },
        {
            label: `Tc’s and C’s`,
            url: '#'
        },
        {
            label: `Privacy`,
            url: '#'
        }
    ]

    handleClick(): void {
        console.log( 'Clicked' )
    }
}
