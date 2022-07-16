import { Button, Collapse } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form/lib/use-form';
import { Dispatch, ReactNode } from 'react';
import { frameStyles } from './Frame.styles';

export default function ActionFrame({
  mt,
  id,
  title,
  icon,
  description,
  rounded,
  contrast,
  compact,
  labelWidth = 120,
  form,
  editable,
  editing,
  setEditing,
  onSubmit,
  children,
}: {
  mt?: number | string;
  id?: string;
  title: string;
  icon?: ReactNode;
  description?: string;
  rounded?: boolean;
  contrast?: boolean;
  compact?: boolean;
  labelWidth?: number;
  form: UseFormReturnType<any>;
  editable?: boolean;
  editing: boolean;
  setEditing: Dispatch<boolean>;
  onSubmit?: (values: any) => void;
  children: ReactNode;
}) {
  const { classes, cx } = frameStyles({ mt, rounded, contrast, compact, labelWidth });
  const openHandler = () => {
    if (setEditing) setEditing(true);
  };
  const closeHandler = () => {
    if (setEditing) setEditing(false);
    form.reset();
  };

  return (
    <div id={id || ''} className={classes.root}>
      {editing && rounded && <div className={classes.roundedShadow}></div>}
      <div className={cx(classes.frame, { [classes.shadow]: !rounded && editing })}>
        <div className={classes.headerWrap}>
          <div className={classes.header}>
            {icon && icon}
            <div className={classes.title}>{title}</div>
            <div style={{ marginRight: 0 }}>
              {editable && !editing && (
                <Button compact size="xs" className={classes.toggleButton} onClick={openHandler}>
                  Edit
                </Button>
              )}
            </div>
          </div>
          {description && <div className={classes.description}>{description}</div>}
        </div>
        <form onSubmit={form.onSubmit((values) => onSubmit && onSubmit(values))}>
          {children}
          <div>
            {editable && (
              <Collapse in={editing}>
                <div className={classes.controlWrap}>
                  <Button type="submit" color="dark" size="xs">
                    Save
                  </Button>
                  <Button color="orange" variant="outline" size="xs" onClick={closeHandler}>
                    Cancel
                  </Button>
                </div>
              </Collapse>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
