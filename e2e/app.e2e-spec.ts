import { RecipeBookAppPage } from './app.po';

describe('recipe-book-app App', () => {
  let page: RecipeBookAppPage;

  beforeEach(() => {
    page = new RecipeBookAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
