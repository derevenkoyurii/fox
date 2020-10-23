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
  hidden: boolean;
}

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
  hidden: boolean;
}

export interface Navigation {
  customBackgroundColor?: boolean;
  barBackground?: string;
  headerBackground?: string;
  folded?: boolean;
  position?: 'left' | 'right';
  hidden?: boolean;
}

export interface Layout {
  toolbar?: Toolbar;
  footer?: Footer;
  navigation?: Navigation;
}
