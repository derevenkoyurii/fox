import {browser, by, element} from 'protractor';

export class Page {
  navigateTo(): Promise<any> {
    return browser.get('/') as Promise<any>;
  }

  getParagraphText(): Promise<string> {
    return element(by.css('#main #login-intro'))
      .getText() as Promise<string>;
  }
}
