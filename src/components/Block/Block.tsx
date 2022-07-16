import { ReactNode, useState } from 'react';
import { Button, Collapse } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form/lib/use-form';
import { styles } from './Block.style';

interface BlockProps {
  mt?: number;
  mb?: number;
  rounded?: boolean;
  shadow?: boolean;
  title?: string;
  description?: string;
  form?: UseFormReturnType<any>;
  editable?: boolean;
  children: ReactNode;
}

export default function Block(props: BlockProps) {
  const { classes } = styles({
    mt: props.mt,
    mb: props.mb,
    rounded: props.rounded,
    shadow: props.shadow,
  });
  const [editing, setEditing] = useState(false);
  const openHandler = () => {
    if (setEditing) setEditing(true);
  };
  const closeHandler = () => {
    if (setEditing) setEditing(false);
    props.form && props.form.reset();
  };
  return (
    <div className={classes.root}>
      <div className={classes.wrap}>
        {props.title && (
          <div className={classes.headerWrap}>
            <div className={classes.header}>
              <div className={classes.title}>{props.title}</div>
              {props.form && props.editable && !editing && (
                <Button compact size="xs" className={classes.toggleButton} onClick={openHandler}>
                  Edit
                </Button>
              )}
            </div>
            {props.description && <div className={classes.description}>{props.description}</div>}
          </div>
        )}
        <div className={classes.body}>{props.children}</div>
        {props.form && (
          <Collapse in={editing}>
            <div className={classes.footer} onClick={() => setEditing(!editing)}>
              Footer
            </div>
          </Collapse>
        )}
      </div>
    </div>
  );
}
