import { Textarea, TextareaProps } from '@mantine/core';
import { textareaStyles } from './InputTextarea.styles';

interface InputTextareaProps extends TextareaProps {
  compact?: boolean | undefined;
  labelWidth?: number;
}

export default function InputTextarea(props: InputTextareaProps) {
  const { classes } = textareaStyles({
    compact: props.compact,
    labelWidth: props.labelWidth,
  });
  const values = { ...props };
  // Delete non standard props
  delete values.compact;
  delete values.labelWidth;

  return <Textarea {...values} autosize classNames={classes} />;
}
