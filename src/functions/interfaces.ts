export interface IColumnType {
    column_name: string;
    column_type: string;
    empty_percentage: string;

    min_number_value?: string;
    max_number_value?: string;
    decimal_number_value?: string;
}

export type ITableColumnType = string|number|null;