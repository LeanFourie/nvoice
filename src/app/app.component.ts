// Project Imports
import { Component } from '@angular/core'

// Component Decl
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

// Component Exports
export class AppComponent {
    handleClick(): void {
        console.log( 'Clicked' )
    }
}
