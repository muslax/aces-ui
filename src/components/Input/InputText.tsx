import { TextInput, TextInputProps } from '@mantine/core';
import { inputStyles } from './Input.styles';

interface IInputText extends TextInputProps {
  // Warning: Received `true` for a non-boolean attribute `compact`.
  compact?: boolean | undefined;
  labelWidth?: number;
}

export default function InputText(props: IInputText) {
  const { classes } = inputStyles({
    compact: props.compact,
    labelWidth: props.labelWidth,
  });
  const values = { ...props };
  // Delete non standard props
  delete values.compact;
  delete values.labelWidth;
  // console.log(props);

  return <TextInput {...values} classNames={classes} />;
}
