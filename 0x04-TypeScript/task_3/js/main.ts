import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Alex",
  lastName: "Omondi",
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  ...row,
  age: 21,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
