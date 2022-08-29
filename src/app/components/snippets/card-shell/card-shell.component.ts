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

    // Constructor
     constructor() {}

    // Lifecycles
    ngOnInit(): void {}
}
