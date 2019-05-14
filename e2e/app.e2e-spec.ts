import {InterceptorDemoPage} from './app.po';

describe('interceptor-demo App', () => {
  let page: InterceptorDemoPage;

  beforeEach(() => {
    page = new InterceptorDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
