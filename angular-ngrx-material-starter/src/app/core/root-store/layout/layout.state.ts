import { Navigation, Toolbar, Footer } from 'src/app/core/interfaces';

export interface LayoutState {
  toolbar?: Toolbar;
  footer?: Footer;
  navigation?: Navigation;
}

export const initialStateLayout: LayoutState = {
  navigation: {
    customBackgroundColor: false,
    headerBackground: 'navy-700',
    barBackground: 'navy-500',
    folded: false,
    position: 'left',
    hidden: false
  },
  toolbar: {
    customBackgroundColor: false,
    position: 'below-fixed',
    background: 'navy-700',
    hidden: false
  },
  footer: {
    position: 'below-fixed',
    customBackgroundColor: false,
    background: 'navy-700',
    hidden: false
  }
};
