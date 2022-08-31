// Project Imports
import {
    Component,
    OnInit,
    Input
} from '@angular/core'

// Utils
import { checkWindowSize } from './../../../utils/helpers'

// Interface
export interface ISection {
    /**
     * An optional class added to the section
     *
     */
    class: string

    /**
     * Sizing for desktop, tablet and mobile
     *
     */
    sizing: {
        desktop: string
        tablet: string
        mobile: string
    }
}

// Component Decl
@Component({
    selector: 'snippet-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})

// Component Exports
export class SectionComponent implements OnInit {
    // Inputs
    @Input() class?: ISection[ 'class' ]
    @Input() margin?: ISection[ 'sizing' ]
    @Input() padding?: ISection[ 'sizing' ]

    // Variables
    sizing: { margin: string, padding: string } = {
        margin: '',
        padding: ''
    }

    // Constructor
    constructor() {}

    // Lifecycles
    ngOnInit(): void {
        // Generate the marging and padding
        this.setMarginAndPadding()

        // Add an event listener to the window to check the margin and padding
        window.addEventListener( 'resize', this.setMarginAndPadding )
    }

    ngOnDestroy(): void {
        // Remove the event listener from the window
        window.removeEventListener( 'resize', this.setMarginAndPadding )
    }

    // Functions
    setMarginAndPadding(): void {
        // Check if the current size is desktop
        if ( !checkWindowSize( 1200 ) && !checkWindowSize( 750 ) ) {
            // Update the margin to desktop size
            this.sizing.margin = this.margin?.desktop!
            // Update the padding to desktop size
            this.sizing.padding = this.padding?.desktop!
        }

        // Check if the current size is tablet
        if ( checkWindowSize( 1200 ) && !checkWindowSize( 750 ) ) {
            // Update the margin to tablet size
            this.sizing.margin = this.margin?.tablet!
            // Update the padding to tablet size
            this.sizing.padding = this.padding?.tablet!
        }

        // Check if the current size is mobile
        if ( checkWindowSize( 750 ) ){
            // Update the margin to mobile size
            this.sizing.margin = this.margin?.mobile!
            // Update the padding to mobile size
            this.sizing.padding = this.padding?.mobile!
        }
    }
}
