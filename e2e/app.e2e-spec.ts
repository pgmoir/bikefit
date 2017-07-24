import { BikefitPage } from './app.po';

describe('bikefit App', () => {
  let page: BikefitPage;

  beforeEach(() => {
    page = new BikefitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
