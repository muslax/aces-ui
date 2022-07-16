import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: 1024,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (min-width: 768px)': {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },

  headerWrap: {
    height: 70,
    paddingTop: 16,
    paddingBottom: 15,
    backgroundColor: theme.white,
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    '@media (min-width: 768px)': {
      position: 'fixed',
      zIndex: 99,
      top: 0,
      left: 0,
      right: 0,
      borderBottomColor: 'transparent',
    },
  },

  headerScrolled: {
    '@media (min-width: 768px)': {
      borderBottom: `1px solid ${theme.colors.gray[3]}`,
      boxShadow: '0 0 3px rgba(100,100,100,.15)',
    },
  },

  nav: {
    height: 50,
    padding: '0 16px',
    backgroundColor: theme.white,
    borderBottom: '1px solid transparent',
    '@media (min-width: 768px)': {
      display: 'none',
      // position: 'fixed',
      // top: -200,
    },
  },

  navFixed: {
    position: 'fixed',
    zIndex: 99,
    top: 0,
    left: 0,
    right: 0,
  },

  navScrolled: {
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
    boxShadow: '0 0 3px rgba(100,100,100,.15)',
  },

  heroWrap: {
    '@media (min-width: 768px)': {
      marginTop: 70,
    },
  },

  heroScrolled: {
    '@media (max-width: 767px)': {
      marginTop: 50,
    },
  },

  wrapper: {
    position: 'relative',
    maxWidth: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  pageWrap: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 80,
  },

  sidebar: {
    display: 'none',
    '@media (min-width: 768px)': {
      position: 'sticky',
      top: 100,
      display: 'block',
      width: '23.5%',
      minWidth: 175,
      maxWidth: 200,
      paddingRight: 45,
      // backgroundColor: theme.colors.pink[4],
    },
  },

  mainWrap: {
    flexGrow: 1,
    maxWidth: 620,
    '@media (min-width: 768px)': {
      maxWidth: 720,
    },
  },

  gotoTop: {
    display: 'none',
  },

  gotoTopVisible: {
    display: 'block',
    position: 'fixed',
    bottom: 20,
    right: 20,
    width: 50,
    backgroundColor: 'silver',
  },
}));
