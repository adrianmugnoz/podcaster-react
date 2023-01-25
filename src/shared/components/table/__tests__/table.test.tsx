import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { Table } from '../table.component';
import { styles } from '../table.css';
import { createColumnHelper } from '../table.utils';

type Person = {
  firstName: string;
  lastName: string;
};
const defaultData: Person[] = [
  {
    firstName: 'tandy',
    lastName: 'miller',
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
  },
];
const columnHelper = createColumnHelper<Person>();
const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    header: 'firstName',
  }),
  columnHelper.group({
    header: 'Info',
    columns: [
      columnHelper.accessor('lastName', {
        cell: (info) => info.getValue(),
        header: 'Last Name',
      }),
    ],
  }),
];

describe('<Table />', () => {
  beforeEach(() => {
    render(<Table data={defaultData} columns={columns} />);
  });
  test('renders', async () => {
    const table = screen.getByRole('table');
    expect(table).toBeTruthy();
    expect(table).toHaveClass(styles.table);
  });
  test('renders table rows and headers', async () => {
    const tableHeaders = screen.getAllByRole('columnheader');
    const tableRows = screen.getAllByRole('row');
    expect(tableHeaders[0].textContent).toBe('');
    expect(tableHeaders[1].textContent).toBe('Info');
    expect(tableHeaders[2].textContent).toBe('firstName');
    expect(tableHeaders[3].textContent).toBe('Last Name');
    expect(tableRows[2].textContent).toContain('tandy');
    expect(tableRows[2].textContent).toContain('miller');
    expect(tableRows[3].textContent).toContain('joe');
    expect(tableRows[3].textContent).toContain('dirte');
  });
});
