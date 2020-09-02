/**
 * Toolbar
 */
export interface Toolbar {
  customBackgroundColor?: boolean;
  background?: string;
  position?:
    | 'above'
    | 'above-static'
    | 'above-fixed'
    | 'below'
    | 'below-static'
    | 'below-fixed';
}

/**
 * Footer
 */
export interface Footer {
  customBackgroundColor?: boolean;
  background?: string;
  position?:
    | 'above'
    | 'above-static'
    | 'above-fixed'
    | 'below'
    | 'below-static'
    | 'below-fixed';
}

/**
 * Navbar
 */
export interface Navbar {
  folded?: boolean;
  position?: 'left' | 'right';
}

/**
 * Layout
 */
export interface Layout {
  // style (depend this property build components model)
  style?: string;
  // toolbar
  toolbar?: Toolbar;
  // footer
  footer?: Footer;
  // navigation
  navigation?: {
    customBackgroundColor?: boolean;
    headerBackground: string;
    barBackground: string;
    // navbar
    navbar?: Navbar;
  };
}
