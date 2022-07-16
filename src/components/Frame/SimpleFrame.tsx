import { ReactNode } from 'react';
import { frameStyles } from './Frame.styles';

export default function SimpleFrame({
  p,
  mt,
  id,
  rounded,
  contrast,
  withShadow,
  children,
}: {
  p?: number | string;
  mt?: number | string;
  id?: string;
  rounded?: boolean;
  contrast?: boolean;
  withShadow?: boolean;
  children: ReactNode;
}) {
  const { classes, cx } = frameStyles({ mt, rounded, contrast });
  return (
    <div id={id || ''} className={classes.root}>
      {withShadow && rounded && <div className={classes.roundedShadow}></div>}
      <div className={cx(classes.frame, { [classes.shadow]: !rounded && withShadow })}>
        <div style={{ padding: p }}>{children}</div>
      </div>
    </div>
  );
}
