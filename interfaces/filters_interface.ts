interface IFilterItem {
  name: string
  value: string
}

export interface IFilterValues {
  items: Array<IFilterItem>
  placeholder: string
  queryName: string
}