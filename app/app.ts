import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {MenuTestPage} from './pages/menu-test/menu-test';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  pages: Array<{component: any, title: string, icon: string}>;
  rootPage: any = HomePage;

  constructor(platform: Platform, private menuCtrl: MenuController) {

    this.pages = [
        {component: HomePage ,     title: 'Home' , icon: 'home'},
        {component: MenuTestPage , title: 'MenuTestPage' , icon: 'home'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page:any, menuId: string) :void{
    this.rootPage = page.component;
    this.menuCtrl.close(menuId);
  }
}

ionicBootstrap(MyApp, [],{
  menuType: 'push',
  platforms: {
    ios: {
      menuType: 'overlay',
    }
  }
});
