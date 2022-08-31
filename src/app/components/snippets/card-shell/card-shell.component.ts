// Project Imports
import {
    Component,
    OnInit,
    Input
} from '@angular/core'

// Interface
export interface ICardShell {
    /**
     * The background color of the card
     *
     */
    color: 'green' | 'yellow' | 'red'

    /**
     * The background color shade
     *
     */
    shade?: 'light' | 'dark'

    /**
     * An optional class for the card
     *
     */
    class?: string
}

// Component Decl
@Component({
  selector: 'snippet-card-shell',
  templateUrl: './card-shell.component.html',
  styleUrls: ['./card-shell.component.scss']
})

// Component Exports
export class CardShellComponent implements OnInit {
    // Inputs
    @Input() color: ICardShell[ 'color' ] = 'green'
    @Input() shade: ICardShell[ 'shade' ] = 'dark'
    @Input() class?: ICardShell[ 'class' ]

    // Constructor
     constructor() {}

    // Lifecycles
    ngOnInit(): void {}
}
