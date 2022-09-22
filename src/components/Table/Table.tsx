/* eslint-disable react/jsx-key */
import { useMemo } from 'react'
import { useTable } from 'react-table'
import styles from './Table.module.scss';

type TableProps = {
    tableData: any;
    tableColumns: any;
}
 
function Table({tableData, tableColumns}:TableProps) {
  const data = useMemo(
    () => tableData,
    [tableData]
  )

  const columns = useMemo(
    () => tableColumns,
    [tableColumns]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr { ...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                className={styles.tableHeader}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={styles.tableRow}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;