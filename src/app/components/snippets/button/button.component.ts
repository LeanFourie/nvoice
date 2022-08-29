// Project Imports
import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core'

// Interface
export interface IButton {
    /**
     * The src for the svg icon
     *
     */
    icon: string

    /**
     * The shape of the button ( optional )
     *
     */
    shape?: 'square' | 'round'
}

// Component Decl
@Component({
    selector: 'snippet-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

// Component Exports
export class ButtonComponent implements OnInit {
    // Inputs
    @Input() icon: IButton[ 'icon' ]
    @Input() shape: IButton[ 'shape' ] = 'square'
    
    // Output
    @Output() onClick: EventEmitter< any > = new EventEmitter

    // Constructor
    constructor() {}

    // Lifecycles
    ngOnInit(): void {}

    // Functions
    handleClick(): void {
        // Handle click event in parent
        this.onClick.emit()
    }
}
