import { GearcheckPage } from './app.po';

describe('gearcheck App', () => {
  let page: GearcheckPage;

  beforeEach(() => {
    page = new GearcheckPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
