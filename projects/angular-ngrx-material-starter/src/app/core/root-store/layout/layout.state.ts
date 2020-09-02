// inner imports
import { Navbar, Toolbar, Footer } from 'app/core/interfaces';
// end

export interface LayoutState {
  // style
  style?: string;
  // toolbar
  toolbar?: Toolbar;
  // footer
  footer?: Footer;
  // navigation
  navigation?: {
    customBackgroundColor: boolean;
    barBackground: string;
    headerBackground: string;
    // navbar
    navbar?: Navbar;
  };
}

/**
 * Initial state
 */
export const initialStateLayout: LayoutState = {
  style: 'vertical-layout-1',
  navigation: {
    customBackgroundColor: false,
    headerBackground: 'navy-700',
    barBackground: 'navy-400',
    navbar: {
      folded: false,
      position: 'left'
    }
  },
  toolbar: {
    position: 'below-fixed',
    customBackgroundColor: false,
    background: 'navy-900'
  },
  footer: {
    position: 'below-fixed',
    customBackgroundColor: false,
    background: 'navy-900'
  }
};
