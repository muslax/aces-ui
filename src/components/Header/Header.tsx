import { Avatar, Button, createStyles } from '@mantine/core';
import { useStyles as layoutStyles } from 'components/Layout/Layout.styles';
import Link from 'next/link';

export default function Header() {
  const { classes } = useStyles();
  const { classes: layout } = layoutStyles();

  return (
    <div className={layout.container}>
      <div className={classes.wrap}>
        <Avatar color="blue" src={null} alt="no image here" />
        <div style={{ flexGrow: 1, fontWeight: 600 }}>
          <Link href="/">
            <a style={{ color: 'black', textDecoration: 'none' }}>Aces Partner</a>
          </Link>
        </div>
        <Button
          classNames={{
            root: classes.button,
          }}
        >
          Button
        </Button>
      </div>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },

  button: {
    backgroundColor: theme.colors.yellow[4],
    borderRadius: 3,
    color: theme.colors.dark,
    ':hover': {
      backgroundColor: theme.colors.yellow[5],
    },
  },
}));
