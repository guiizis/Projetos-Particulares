import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './template/header/header.component'
import { NavbarComponent } from './template/navbar/navbar.component'
import { HttpClientModule } from '@angular/common/http';

// ============ MATERIAL ITENS ============

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { FooterComponent } from './template/footer/footer.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { HomeComponent } from './view/home/home.component'
import { MatCardModule } from '@angular/material/card'
import { InteressesComponent } from './view/interesses/interesses.component'
import { TempoLivreComponent } from './view/tempo-livre/tempo-livre.component'
import { MatTabsModule } from '@angular/material/tabs'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatTooltipModule } from '@angular/material/tooltip';

// ============ MATERIAL ITENS ============
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    InteressesComponent,
    TempoLivreComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
