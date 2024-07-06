const resources = {
  background: {
    small: "/img/background-small.jpg",
    medium: "/img/background-medium.jpg",
    large: "/img/background-large.jpg",
  },
  pattern: "/img/glow.png",
};

const sounds = {
  common: {
    volume: 0.5,
  },
  categories: {
    interaction: {
      click: { src: ['/sound/click.mp3'] },
      typing: { src: ['/sound/typing.mp3'] },
    },
    notification: {
      info: { src: ['/sound/deploy.mp3'] },
      success: { src: ['/sound/success.mp3'], volume: 0.2 },
      warning: { src: ['/sound/warning.mp3'] },
      error: { src: ['/sound/abort.mp3'] },
    },
  },
};

const theme = {
  space: 20,
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 800,
    lg: 1200,
  },
  palette: {
    primary: { main: '#a1ecfb' },
  },
  typography: {
    h1: {
      fontFamily: '"Titillium Web", "sans-serif"',
    },
    h2: {
      fontFamily: '"Titillium Web", "sans-serif"',
    },
    h3: {
      fontFamily: '"Titillium Web", "sans-serif"',
    },
    h4: {
      fontFamily: '"Titillium Web", "sans-serif"',
    },
    h5: {
      fontFamily: '"Titillium Web", "sans-serif"',
    },
    h6: {
      fontFamily: '"Titillium Web", "sans-serif"',
    },
  },
};

export {
  resources,
  sounds,
  theme,
};
