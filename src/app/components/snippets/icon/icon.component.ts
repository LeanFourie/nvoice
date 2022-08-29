// Project Imports
import {
    Component,
    OnInit,
    ViewChild,
    Input
} from '@angular/core'
import {
    DomSanitizer,
    SafeHtml
} from '@angular/platform-browser'

// Interface
export interface IIcon {
    iconPath: string
}

// Component Decl
@Component({
    selector: 'snippet-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})

// Component Exports
export class IconComponent implements OnInit {
    // Refs
    @ViewChild( 'container' ) container: HTMLSpanElement
    @ViewChild( 'image' ) image: HTMLImageElement

    // Inputs
    @Input() iconPath: IIcon[ 'iconPath' ]

    // Variables
    svgElement: SafeHtml

    // Constructor
    constructor( private sanitizer: DomSanitizer ) {}

    // Lifecycles
    ngOnInit(): void {}

    ngAfterViewInit(): void {
        // Convert inline image to inline svg
        this.imageToSVGConversion()
    }

    // Functions
    // Convert inline image to inline svg
    imageToSVGConversion() {
        // Check if the image exists
        if ( this.image ) {
            // Make new XML request
            const xhr = new XMLHttpRequest()

            // Get the image url
            const imgURL: string = this.iconPath

            // Check if the image url exists
            if ( imgURL ) {
                // Open XML request
                xhr.open( 'GET', imgURL )
        
                // Check for changes in XML request
                xhr.onreadystatechange = ( data: any ) => {
                        // Get the xml output
                    let xml = data.target.response,
                        // Get the HTML
                        dom = new DOMParser(),
                        // Get the SVG xml
                        svg = dom.parseFromString( xml, 'image/svg+xml' ),
                        // Get the SVG html element
                        svgElement = svg.documentElement
        
                    // Check if the request has finished
                    if ( xhr.readyState === 4 ) {
                        // Make the svg full width
                        svgElement.style.width = '100%'
                        // Make the svg full height
                        svgElement.style.height = '100%'
                        // Change the display property for the svg to block
                        svgElement.style.display = 'block'
                        // Keep the image aspect ratio
                        svgElement.style.objectFit = 'contain'

                        // Save the SVG element as safe html
                        this.svgElement = this.sanitizer.bypassSecurityTrustHtml(
                            `${ svgElement.outerHTML }`
                        )
                    }
                }
        
                xhr.send()
            }
        }
    }
}
