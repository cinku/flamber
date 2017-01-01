import { FlamberPage } from './app.po';

describe('flamber App', function() {
  let page: FlamberPage;

  beforeEach(() => {
    page = new FlamberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
