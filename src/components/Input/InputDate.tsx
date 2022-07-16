import { DatePicker, DatePickerProps } from '@mantine/dates';
import { inputDateStyles } from './InputDate.styles';

interface IDateInput extends DatePickerProps {
  compact?: boolean | undefined;
  labelWidth?: number;
}

export default function InputDate(props: IDateInput) {
  const { classes } = inputDateStyles({
    compact: props.compact,
    labelWidth: props.labelWidth,
  });
  const values = { ...props };
  // Delete non standard props
  delete values.compact;
  delete values.labelWidth;

  return <DatePicker {...values} classNames={classes} />;
}
