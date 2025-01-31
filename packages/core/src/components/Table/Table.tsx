import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import Body from './Body';
import ColumnConfiguration from './ColumnConfiguration';
import Head from './Head';
import { addSizeToColumnConfig } from './helpers';
import { maxColumnSizeReducer } from './maxColumnSizeReducer';
import { TableStyled } from './Table.styled';
import { ColumnConfig, Props, StaticProps } from './types';
import useRowSelector from './useRowSelector';

const loadingBodyData = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const checkboxColumnConfig: ColumnConfig = {
    title: 'ch',
    field: 'medly-table-checkbox',
    formatter: 'checkbox',
    hide: false,
    frozen: true
};

export const Table: SFC<Props> & WithStyle & StaticProps = React.memo(
    React.forwardRef((props, ref) => {
        const {
            data,
            onRowClick,
            onSort,
            uniqueKeyName,
            rowSelectionDisableKey,
            rowClickDisableKey,
            isSelectable,
            selectedRows,
            onRowSelection,
            isLoading,
            ...restProps
        } = props;

        const [ids, selectedIds, toggleId] = useRowSelector(
                data.filter(dt => !dt[rowSelectionDisableKey]).map(dt => dt[uniqueKeyName]),
                selectedRows
            ),
            [isSelectAllDisable, setSelectAllDisableState] = useState(data.every(dt => dt[rowSelectionDisableKey])),
            [maxColumnSizes, dispatch] = useReducer(maxColumnSizeReducer, {}),
            [columns, setColumns] = useState(addSizeToColumnConfig([...(isSelectable ? [checkboxColumnConfig] : []), ...props.columns]));

        const addColumnMaxSize = useCallback((field: string, value: number) => dispatch({ field, value, type: 'ADD_SIZE' }), [dispatch]),
            isRowClickable = useMemo(() => (onRowClick ? true : false), [onRowClick]);

        useEffect(() => {
            setColumns(addSizeToColumnConfig([...(isSelectable ? [checkboxColumnConfig] : []), ...props.columns]));
        }, [props.columns, isSelectable]);

        useEffect(() => {
            ids.setValue(data.filter(dt => !dt[rowSelectionDisableKey]).map(dt => dt[uniqueKeyName]));
            setSelectAllDisableState(data.every(dt => dt[rowSelectionDisableKey]));
        }, [data]);

        useEffect(() => {
            selectedIds.setValue(selectedRows);
        }, [selectedRows]);

        useEffect(() => {
            onRowSelection && onRowSelection(selectedIds.value);
        }, [selectedIds.value]);

        return (
            <TableStyled ref={ref} isRowClickable={isRowClickable} {...restProps}>
                <Head
                    {...{
                        onSort,
                        columns,
                        setColumns,
                        maxColumnSizes,
                        onSelectAllClick: toggleId,
                        isAllRowSelected: ids.isAllSelected,
                        isSelectAllDisable: isLoading || isSelectAllDisable
                    }}
                />
                <Body
                    {...{
                        isLoading,
                        columns,
                        uniqueKeyName,
                        rowClickDisableKey,
                        rowSelectionDisableKey,
                        addColumnMaxSize,
                        selectedRows: selectedIds.value,
                        onRowSelection: toggleId,
                        data: isLoading ? loadingBodyData : data,
                        onRowClick: !isLoading && onRowClick
                    }}
                />
            </TableStyled>
        );
    })
);

Table.defaultProps = {
    uniqueKeyName: 'id',
    rowClickDisableKey: '',
    rowSelectionDisableKey: '',
    data: [],
    selectedRows: [],
    isSelectable: false,
    isLoading: false
};

Table.displayName = 'Table';
Table.ColumnConfiguration = ColumnConfiguration;
Table.Style = TableStyled;
