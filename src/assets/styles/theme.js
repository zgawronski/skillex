const size = {
  mobile: '600px',
  tablet: '1024px',
};

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    blue: '#46A4D9',
    darkBlue: '#2E6DA7',
    lightBlue: '#88BBBB',
    gray: '#B7B7B7',
    formBackground: '#F1F1F1',
    formStroke: '#D3D3D3',
  },

  // 1rem = 16px)
  fontSize: {
    xxl: '3.75rem', // 60px
    xl: '3rem', // 48px
    l: '1.25rem', // 20px
    m: '1rem', // 16px
    s: '0.75rem', // 12px
  },

  breakpoints: {
    mobileOnly: `only screen and (max-width: ${size.mobile})`,
    notMobile: `only screen and (min-width: ${size.mobile})`,
    tabletOnly: `only screen and (min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
    notDesktop: `only screen and (max-width: ${size.tablet})`,
    desktopOnly: `only screen and (min-width: ${size.tablet})`,
  },
};