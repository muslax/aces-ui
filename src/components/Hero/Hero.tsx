import { createStyles } from '@mantine/core';

export default function Hero({ type, title }: { type: string; title: string }) {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrap}>
        <div className={classes.hero}>
          <div className={classes.iconBox}></div>
          <div>
            <div className={classes.label}>{type}</div>
            <div className={classes.title}>{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  root: {
    padding: '20px 24px',
    backgroundColor: theme.colors.violet[0],
    '@media (min-width: 768px)': {
      padding: '28px 24px',
    },
  },

  wrap: {
    margin: '0 auto',
    '@media (min-width: 768px)': {
      maxWidth: 900,
    },
  },

  hero: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
    '@media (min-width: 768px)': {
      gap: 20,
      paddingLeft: 16,
    },
  },

  iconBox: {
    width: 54,
    height: 54,
    border: `1px solid ${theme.colors.gray[4]}`,
    backgroundColor: 'white',
    borderRadius: 5,
    '@media (min-width: 768px)': {
      width: 64,
      height: 64,
      borderRadius: 7,
    },
  },

  label: {
    fontSize: 11,
    fontWeight: 500,
    textTransform: 'uppercase',
    '@media (min-width: 768px)': {
      fontSize: 12,
    },
  },

  title: {
    fontSize: 30,
    lineHeight: 0.8,
    fontWeight: 800,
    letterSpacing: -1,
    '@media (min-width: 768px)': {
      fontSize: 36,
    },
  },
}));
