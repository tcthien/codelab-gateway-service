import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {UIView, UIRouterModule} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';
import {store} from './reducers';

import {AppComponent} from './containers/App';
import {FooterComponent} from './components/footer/Footer';
import {HeaderComponent} from './components/header/Header';
import {MainSectionComponent} from './components/mainSection/MainSection';
import {TodoItemComponent} from './components/item/TodoItem';
import {TodoTextInputComponent} from './components/textInput/TodoTextInput';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({states: STATES, configClass: MyUIRouterConfig}),
    store
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainSectionComponent,
    TodoItemComponent,
    TodoTextInputComponent
  ],
  bootstrap: [UIView]
})
export class AppModule {}
