"use client";

import DataGrid, {
  Column,
  Editing,
  Item,
  Lookup,
  Paging,
  Toolbar
} from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.material.blue.light.css";

import { handleErrors } from "@/utils";
import CustomStore from "devextreme/data/custom_store";
import { useEffect, useMemo, useState } from "react";


const DevExtremeGrid = () => {
  const [states, setStates] = useState([]);
  
  const dataSource = useMemo(() => new CustomStore({
      async load() {
        try {
          const response = await fetch("/api/devextreme/load/employees");
          const result = await response.json();
  
          return {
            data: result.employees,
          };
          
        } catch (err) {
          throw new Error("Employee data loading Error");
        }
      },
      async insert(values) {
        try {
          const response = await fetch("/api/devextreme/insert", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          const result = await response.json();
          return result;
          
        } catch (err) {
          throw new Error("Employee insert Error");
        }
      },
      async update(key, values) {
        try {
          const response = await fetch(
            `/api/devextreme/update/${encodeURIComponent(key.id)}`,
            {
              method: "PUT",
              body: JSON.stringify(values),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
  
          const result = await response.json();
          return result;
          
        } catch (err) {
          throw new Error("Employee update Error");
        }
      },
      async remove(key) {
        try {
          fetch(`/api/devextreme/remove/${encodeURIComponent(key.id)}`, {
          method: "DELETE",
        })
        return key;
        
        } catch (err) {
          throw new Error("Employee remove Error");
        }
      },
    }), []);
  
  
    useEffect(() => {
      fetch("/api/devextreme/load/states")
        .then(handleErrors)
        .then((response) => response.json())
        .then((data) => {
          setStates(data.states);
        })
        .catch((error) => {
          console.error("Failed to load states data:", error);
        });
    }, []);

  return (
    <div id="data-grid">
      <DataGrid
        id="gridContainer"
        dataSource={dataSource}
        showBorders={true}
        repaintChangesOnly={true}
      >
        <Paging enabled={false} />
        <Editing
          refreshMode="reshape"
          mode="cell"
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
        />

        <Column dataField="prefix" caption="Title" width={80} />
        <Column dataField="firstName" />
        <Column dataField="lastName" />
        <Column dataField="position" width={170} />
        <Column dataField="stateId" caption="State" width={125}>
          <Lookup dataSource={states} valueExpr="id" displayExpr="name" />
        </Column>
        <Column dataField="birthDate" dataType="date" />
        <Toolbar>
          <Item name="addRowButton" showText="always" />
        </Toolbar>
      </DataGrid>
    </div>
  );
};

export default DevExtremeGrid;
