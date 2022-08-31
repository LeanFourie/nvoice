// Module Imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { SwiperModule } from 'swiper/angular'

// Component Imports
import { AppComponent } from './app.component'
// Snippets
import { ButtonComponent } from './components/snippets/button/button.component'
import { IconComponent } from './components/snippets/icon/icon.component';
import { CardShellComponent } from './components/snippets/card-shell/card-shell.component';
import { LinkComponent } from './components/snippets/link/link.component';
import { UserComponent } from './components/snippets/user/user.component';
import { SectionComponent } from './components/snippets/section/section.component';
// Common
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
// Sections
import { StatsComponent } from './components/sections/stats/stats.component';
import { InfoCardsComponent } from './components/sections/info-cards/info-cards.component';
import { ProfileCtaComponent } from './components/sections/profile-cta/profile-cta.component'
// Pages
import { HomeComponent } from './components/pages/home/home.component';
import { CarouselComponent } from './components/common/carousel/carousel.component';
import { InfoCardSlideComponent } from './components/snippets/info-card-slide/info-card-slide.component';

// Routes
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent,
    }
]

// Module Decl
@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        IconComponent,
        CardShellComponent,
        LinkComponent,
        HeaderComponent,
        UserComponent,
        FooterComponent,
        HomeComponent,
        StatsComponent,
        InfoCardsComponent,
        ProfileCtaComponent,
        SectionComponent,
        CarouselComponent,
        InfoCardSlideComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot( routes, {
            initialNavigation: 'enabledBlocking'
        }),
        NgxChartsModule,
        SwiperModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

// Exports
export class AppModule {}
