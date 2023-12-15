import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { UnderAngeFilterDirective } from './directives/under-ange-filter.directive';
import { MudandoCorDirective } from './directives/changingColor/mudando-cor.directive';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CadastroComponent, SucessoCadastroComponent, ErrorMessageComponent, UnderAngeFilterDirective, MudandoCorDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
