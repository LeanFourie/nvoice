// Module Imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'

// Component Imports
import { AppComponent } from './app.component'
import { ButtonComponent } from './components/snippets/button/button.component'
import { IconComponent } from './components/snippets/icon/icon.component'

// Module Decl
@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        IconComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

// Exports
export class AppModule {}
