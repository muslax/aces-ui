import { createStyles } from '@mantine/core';
export const inputDateStyles = createStyles(
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

    input: {
      borderRadius: 0,
      borderColor: theme.colors.red[4],
      backgroundColor: theme.white,
      borderLeftWidth: compact ? 2 : 1,
      ':focus': {
        borderColor: theme.colors.gray[7],
        boxShadow: `2px 2px 0 ${theme.colors.gray[3]}`,
      },
      ':read-only': {
        opacity: 1,
        borderColor: theme.colors.gray[4],
        borderLeftColor: compact ? theme.colors.gray[3] : theme.colors.gray[4],
        borderLeftWidth: compact ? 2 : 1,
        ':focus': {
          borderColor: theme.colors.gray[7],
        },
      },
      ':disabled': {
        opacity: 1,
        cursor: 'default',
        color: `${theme.colors.dark[9]} !important`,
        borderColor: theme.colors.gray[1],
        backgroundColor: theme.colors.gray[1],
        borderLeftColor: compact ? theme.colors.gray[3] : theme.colors.gray[1],
        borderLeftWidth: compact ? 2 : 1,
        ':focus': {
          // boxShadow: `none`,
          // boxShadow: `2px 2px 0 ${theme.colors.gray[3]}`,
        },
      },
    },
  })
);
