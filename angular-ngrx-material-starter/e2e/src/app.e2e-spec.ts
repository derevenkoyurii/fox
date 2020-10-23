import {Page} from './app.po';
import {browser, logging} from 'protractor';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  it('should display Welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);

    expect(logs)
      .not
      .toContain(jasmine.objectContaining({level: logging.Level.SEVERE} as logging.Entry));
  });
});
