// Project Imports
import {
    Component,
    OnInit
} from '@angular/core'

// Interface
export interface IPieChart {
    /**
     * The pie chart dataset
     *
     */
    data: {
        name: string
        value: number
    }[]
}

// Component Decl
@Component({
    selector: 'section-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.scss']
})

// Component Exports
export class StatsComponent implements OnInit {
    // Variables
    numberStats: { title: string, subtitle: string, description: string }[] = [
        {
            title: '6 820',
            subtitle: 'R',
            description: 'Total income from paid invoices'
        },
        {
            title: '7 290',
            subtitle: 'R',
            description: 'Potential income from sent invoices'
        },
        {
            title: '21',
            subtitle: 'Days',
            description: 'Average invoice settlement time'
        }
    ]
    invoicesSent: number = 24
    invoicesPaid: number = 16
    invoiceLinks: { label: string, icon: string }[] = [
        {
            label: 'Send',
            icon: 'assets/icons/icon_invoice-sent.svg'
        },
        {
            label: 'Request',
            icon: 'assets/icons/icon_invoice-request.svg'
        },
        {
            label: 'Paid',
            icon: 'assets/icons/icon_invoice-paid.svg'
        }
    ]

    // Chart
    pieChartView: [ number, number ] = [ 160, 160 ]
    pieChartData: IPieChart[ 'data' ] = [
        {
            name: 'Old',
            value: 24
        },
        {
            name: 'New',
            value: 28
        }
    ]
    pieChartDataColorScheme = [
        {
            name: "Old",
            value: '#E75F4F'
        },
        {
            name: "New",
            value: '#EFB14A'
        }
    ]

    // Constructor
    constructor() {}

    // Lifecycles
    ngOnInit(): void {}
}
