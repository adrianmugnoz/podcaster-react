import React from 'react';
import { flexRender, getCoreRowModel, useReactTable, RowData } from '@tanstack/react-table';
import { styles } from './table.css';

type TableProps = {
  data: RowData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
};

function Table({ data, columns }: TableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className={styles.table}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th className={styles.th} key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr className={styles.trBody} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className={styles.td} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { Table };
