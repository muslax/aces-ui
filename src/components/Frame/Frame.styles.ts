import { createStyles } from '@mantine/core';
export const frameStyles = createStyles(
  (
    theme,
    {
      p,
      mt,
      labelWidth = 120,
      compact,
      rounded,
      contrast,
    }: {
      p?: number | string;
      mt?: number | string;
      labelWidth?: number;
      compact?: boolean;
      rounded?: boolean;
      contrast?: boolean;
    }
  ) => ({
    root: {
      position: 'relative',
      marginTop: mt || 0,
    },

    roundedShadow: {
      display: 'block',
      position: 'absolute',
      top: 2,
      left: 2,
      right: -4,
      bottom: -4,
      borderRadius: 5,
      border: `2px solid ${theme.colors.gray[1]}`,
      backgroundColor: theme.colors.gray[3],
    },

    frame: {
      padding: p || 0,
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'white',
      borderRadius: rounded ? 3 : 0,
      border: `1px solid ${contrast ? theme.colors.gray[6] : theme.colors.gray[5]}`,
    },

    shadow: {
      boxShadow: `4px 4px 0px ${theme.colors.gray[2]}`,
    },

    headerWrap: {
      padding: '10px 15px',
      borderBottom: `1px solid ${contrast ? theme.colors.gray[6] : theme.colors.gray[5]}`,
    },

    header: {
      marginBottom: 0,
      display: 'flex',
      gap: 8,
      alignItems: 'center',
    },

    title: {
      flexGrow: 1,
      minHeight: 24,
      fontWeight: 800,
    },

    description: {
      fontSize: 13,
      lineHeight: 1.2,
      marginBottom: 2,
      color: theme.colors.gray[7],
    },

    // control: {
    //   padding: 15,
    // },

    controlWrap: {
      padding: 15,
      paddingLeft: compact ? 15 : labelWidth + 15,
      display: 'flex',
      justifyContent: 'space-between',
      borderTop: `1px solid ${contrast ? theme.colors.gray[6] : theme.colors.gray[5]}`,
    },

    toggleButton: {
      fontSize: 12,
      fontWeight: 500,
      color: theme.colors.dark[5],
      backgroundColor: theme.colors.gray[2],
      ':hover': {
        backgroundColor: theme.colors.gray[0],
      },
    },
  })
);
