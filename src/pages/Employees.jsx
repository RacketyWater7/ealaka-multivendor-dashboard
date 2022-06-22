import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, CommandColumn } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  // const toolbarOptions = ['Search', 'Add', 'PdfExport', 'Edit', 'Delete'];

  const editing = { allowDeleting: true, allowEditing: true };
  const commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
    { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
    { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        // toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          <ColumnDirective headerText="Manage Records" width="160" commands={commands} />
        </ColumnsDirective>
        <Inject services={[Search, Page, CommandColumn]} />

      </GridComponent>
    </div>
  );
};
export default Employees;
