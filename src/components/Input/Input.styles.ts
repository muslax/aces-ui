import { createStyles } from '@mantine/core';
export const inputStyles = createStyles(
  (theme, { compact, labelWidth = 130 }: { compact?: boolean; labelWidth?: number }) => ({
    root: {
      display: compact ? 'block' : 'flex',
      flexWrap: 'wrap',
      alignItems: 'start',
    },

    wrapper: {
      display: 'block',
      flexGrow: 1,
    },

    label: {
      display: 'block',
      flexBasis: labelWidth,
      flexShrink: 0,
      marginTop: compact ? 0 : 8,
      marginBottom: compact ? 2 : 0,
      color: theme.colors.dark[3],
      fontSize: 12,
      textTransform: 'uppercase',
    },

    error: {
      width: '100%',
      marginLeft: compact ? 0 : labelWidth,
      fontSize: 12,
      marginTop: 3,
      color: theme.colors.orange[5],
    },

    invalid: {
      borderColor: theme.colors.orange[4],
    },

    input: {
      color: theme.colors.dark[6],
      borderRadius: 0,
      borderColor: theme.colors.gray[4],
      backgroundColor: theme.white,
      borderLeftWidth: compact ? 2 : 1,
      ':focus': {
        borderColor: theme.colors.gray[7],
        boxShadow: `2px 2px 0 ${theme.colors.gray[3]}`,
      },
      ':read-only': {
        borderColor: theme.colors.gray[1],
        backgroundColor: theme.colors.gray[1],
        borderLeftColor: compact ? theme.colors.gray[3] : theme.colors.gray[1],
        borderLeftWidth: compact ? 2 : 1,
        ':focus': {
          boxShadow: `none`,
        },
      },
      ':disabled': {
        opacity: 1,
        color: theme.colors.dark[6],
        borderColor: theme.colors.gray[1],
        backgroundColor: theme.colors.gray[1],
        borderLeftColor: compact ? theme.colors.gray[3] : theme.colors.gray[1],
        borderLeftWidth: compact ? 2 : 1,
        ':focus': {
          boxShadow: `none`,
        },
      },
    },
  })
);
