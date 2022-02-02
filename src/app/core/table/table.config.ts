export interface MyTableConfig {
  headers : MyHeaders [];
  order : MyOrder;
  search : MySearch ;
  pagination : MyPagination ;
  actions : MyTableActionEnum[];
}

export  interface MyHeaders{
  key : string;
  label : string;
}

export interface MyOrder {
  defaultColumn : number;
  orderType : string;
}

export interface MySearch {
  columns : string [];
}

export interface MyPagination {
  itemPerPage : number;
  itemPerPageOptions : number [];
}


export enum MyTableActionEnum {
  NEW_ROW ,
  EDIT="edit",
  DELETE="delete",
  SHOW="show"
}
