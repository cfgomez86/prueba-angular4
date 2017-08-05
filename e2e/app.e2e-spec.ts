import { PruebaAngular4Page } from './app.po';

describe('prueba-angular4 App', () => {
  let page: PruebaAngular4Page;

  beforeEach(() => {
    page = new PruebaAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
