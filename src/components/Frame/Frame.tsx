import { ReactNode } from 'react';
import { frameStyles } from './Frame.styles';

export default function Frame({
  p,
  mt,
  id,
  title,
  icon,
  description,
  rightButton,
  rounded,
  contrast,
  withShadow,
  children,
}: {
  p?: number | string;
  mt?: number | string;
  id?: string;
  title: string;
  icon?: ReactNode;
  description?: string;
  rightButton?: ReactNode;
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
        <div className={classes.headerWrap}>
          <div className={classes.header}>
            {icon && icon}
            <div className={classes.title}>{title}</div>
            <div style={{ marginRight: -8 }}>{rightButton && rightButton}</div>
          </div>
          {description && <div className={classes.description}>{description}</div>}
        </div>
        <div style={{ padding: p }}>{children}</div>
      </div>
    </div>
  );
}
