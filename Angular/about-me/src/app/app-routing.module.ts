import { TempoLivreComponent } from './view/tempo-livre/tempo-livre.component'
import { InteressesComponent } from './view/interesses/interesses.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './view/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'interesses',
    component: InteressesComponent,
  },

  {
    path: 'tempoLivre',
    component: TempoLivreComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
