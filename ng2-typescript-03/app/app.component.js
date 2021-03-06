System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Angular App";
                    this.imageUrl = "http://lorempixel.com/400/200/";
                    this.isActive = true;
                }
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log("Clicked", $event);
                };
                AppComponent.prototype.onDivClick = function () {
                    console.log("Div Clicked");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>{{ title }}</h1>\n    <img src=\"{{ imageUrl }}\" />\n    <!--<img [src]=\"imageUrl\" />\n    <img bind-src=\"imageUrl\" />-->\n    <br>\n    <button class=\"btn btn-primary\" [class.active]=\"isActive\"\n        [style.backgroundColor] = \"isActive ? 'blue' : 'gray'\">Submit</button>\n     \n     <br>Event Binding :<br>\n     <div (click)=\"onDivClick()\">\n        <button (click)=\"onClick($event)\" >Submit</button>\n     </div>\n     \n     <br>Two way Binding :<br>\n      <input type=\"text\" [(ngModel)]=\"title\"/>\n      <input type=\"button\" (click)=\"title=''\" value=\"Clear\"/>\n      \n      <br>Exercice :<br>\n      \n      \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map