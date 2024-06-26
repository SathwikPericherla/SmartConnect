import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

export function ResponsiveDateTimePickers() {
  return (
    <div className='p-6'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'StaticDateTimePicker',
        ]}
      >
        <DemoItem label="Static variant">
          <StaticDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
    </div>
  );
}