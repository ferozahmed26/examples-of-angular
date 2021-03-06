import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleSelectComponent } from './dropdown/simple-select/simple-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrerequisiteComponent } from './prerequisite/prerequisite.component';
import { MultipleSelectComponent } from './dropdown/multiple-select/multiple-select.component';
import { SimpleAutocompleteComponent } from './autocomplete/simple-autocomplete/simple-autocomplete.component';
import { SearchFilterPipe } from './pipes/filter.pipes';
import { ClickOutsideDirective } from './directives/click.outside.directive';
import { AccordionComponent } from './accordion/accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleModalComponent } from './modal/simple-modal/simple-modal.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherItemComponent } from './weather/weather-item/weather-item.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OnOffCheckboxComponent } from './on-off-checkbox/on-off-checkbox.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AnchorDisabledDirective } from './directives/anchor-disabled.directive';
import { DdlSelectedTextComponent } from './ddl-selected-text/ddl-selected-text.component';
import { PsSelectText } from './ddl-selected-text/ps-select-text.directive';
import { SelectAllTextComponent } from './select-all-text/select-all-text.component';
import { SelectAllDirectives } from './select-all-text/text-all.directive';
import { BoolTextComponent } from './bool-text/bool-text.component';
import { BoolTextDirective } from './bool-text/bool-text.directive';
import { HideShowDirective } from './directives/hide-show.directive';
import { HideShowSliderComponent } from './hide-show-slider/hide-show-slider.component';
import { PhoneNumberFormatDirective } from './directives/phone-number-format.directive';
import { PhoneNumberFormatComponent } from './phone-number-format/phone-number-format.component';
import { PerfetchScrollbarComponent } from './perfetch-scrollbar/perfetch-scrollbar.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
 
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  scrollXMarginOffset:30,
    scrollYMarginOffset:30,
    minScrollbarLength:20
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    SimpleSelectComponent,
    PrerequisiteComponent,
    MultipleSelectComponent,
    SimpleAutocompleteComponent,
    SearchFilterPipe,
    ClickOutsideDirective,
    AccordionComponent,
    SimpleModalComponent,
    WeatherComponent,
    WeatherItemComponent,
    WeatherListComponent,
    OnOffCheckboxComponent,
    FileUploadComponent,
    AnchorDisabledDirective,
    DdlSelectedTextComponent,
    PsSelectText,
    SelectAllTextComponent,
    SelectAllDirectives,
    BoolTextComponent,
    BoolTextDirective,
    HideShowDirective,
    HideShowSliderComponent,
    PhoneNumberFormatDirective,
    PhoneNumberFormatComponent,
    PerfetchScrollbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
