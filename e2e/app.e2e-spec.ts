import { AngualrDemoPage } from './app.po';

describe('angualr-demo App', () => {
  let page: AngualrDemoPage;

  beforeEach(() => {
    page = new AngualrDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
