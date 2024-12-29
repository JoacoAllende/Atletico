export interface NavItem {
    displayName: string;
    disabled?: boolean;
    route?: string;
    private?: boolean;
    children?: NavItem[];
    expanded?: boolean;
  }