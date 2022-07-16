import { Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import InputText from 'components/Input/InputText';
import { useState } from 'react';
import { Database } from 'tabler-icons-react';
import ActionFrame from './ActionFrame';
import InputDate from 'components/Input/InputDate';
import InputTextarea from 'components/Input/InputTextarea';

export default function ActionFrameTest({ compact }: { compact: boolean }) {
  const [editing, setEditing] = useState(false);
  const labelWidth = 125;
  const form = useForm({
    initialValues: {
      nama: 'Jamal',
      alamat: 'Jakal',
      tanggal: '',
    },
  });

  return (
    <ActionFrame
      // mt={20}
      id="action-frame-test"
      title={`Action Frame ${form.values['tanggal']}`}
      icon={<Database size={18} color="orange" />}
      description="Description of this ActionFrame"
      rounded={!editing}
      contrast={editing}
      editing={editing}
      editable
      labelWidth={labelWidth}
      compact={compact}
      setEditing={setEditing}
      form={form}
      onSubmit={(values) => console.log(values)}
    >
      <Stack p={15} spacing={10}>
        <InputText
          id="sample-input"
          labelWidth={labelWidth}
          compact={compact}
          {...form.getInputProps('nama')}
          label="Nama"
          readOnly={!editing}
        />
        <InputDate
          label="Tanggal mulai"
          labelWidth={labelWidth}
          inputFormat="DD MMMM YYYY"
          compact={compact}
          {...form.getInputProps('tanggal')}
          disabled={!editing}
        />
        <InputTextarea
          label="Textarea"
          placeholder="Your comment"
          readOnly={!editing}
          labelWidth={labelWidth}
          compact={compact}
        />
      </Stack>
    </ActionFrame>
  );
}
