const size = {
  mobile: '600px',
  tablet: '1024px',
};

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    // skillJunior: '#88BBBB',
    skillJunior: 'green',
    // skillMid: '#46A4D9',
    skillMid: 'gold',
    // skillSenior: '#2E6DA7',
    skillSenior: 'red',
    commonText: '#2E6DA7',
    gray: '#B7B7B7',
    formBackground: '#F1F1F1',
    formStroke: '#D3D3D3',
  },

  // 1rem = 16px)
  fontSize: {
    xxxl: '3.75rem', // 60px
    xxl: '3rem', // 48px
    xl: '2rem', // 32px
    l: '1.5rem', // 24px
    m: '1.25rem', // 20px
    s: '1rem', // 16px
    xs: '0.75rem', // 12px
  },

  breakpoints: {
    mobileOnly: `only screen and (max-width: ${size.mobile})`,
    notMobile: `only screen and (min-width: ${size.mobile})`,
    tabletOnly: `only screen and (min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
    notDesktop: `only screen and (max-width: ${size.tablet})`,
    desktopOnly: `only screen and (min-width: ${size.tablet})`,
  },
};
