import { Tabs, TabsProps } from '@mantine/core';
import { styles } from './PTabs.styles';

export default function PTabs(props: TabsProps) {
  const { classes } = styles();
  return <Tabs variant="unstyled" classNames={classes} {...props} />;
}
