"use client";

import { handleErrors } from "@/utils";
import { BryntumGrid } from "@bryntum/grid-react";
import { useEffect, useRef, useState } from "react";

export default function Grid() {
  const [states, setStates] = useState([]);

  const [gridConfig] = useState({
    cellEditFeature: true,

    store: {
      // createUrl: "/create",
      readUrl: "/api/bryntum/load",
      // updateUrl: "/update/",
      // deleteUrl: "/delete/",
      autoLoad: true,
      // autoCommit: true,

      useRestfulMethods: true,
      httpMethods: {
        read: "GET",
        // create: "POST",
        // update: "PATCH",
        // delete: "DELETE",
      },
      // listeners: {
      //   beforeRequest: (event) => {
      //     if (event.action === "create") {
      //       const newItem = event.body.data[0];
      //       delete newItem.id;
      //       event.body = newItem;
      //     }
      //     if (event.action === "update") {
      //       const updatedItem = event.body.data[0];
      //       const itemId = updatedItem.id;
      //       delete updatedItem.id;
      //       event.body = updatedItem;
      //       store.updateUrl = `/update/${itemId}/`;
      //     }
      //   },
      // },
    },
    columns: [
      {
        text: "Title",
        field: "prefix",
        width: 80,
      },
      // {
      //   text: "First Name",
      //   field: "firstName",
      // },
      {
        text: "Last Name",
        field: "lastName",
      },
      {
        text: "Position",
        field: "position",
        width: 170,
      },
      // {
      //   text: "State",
      //   field: "stateId",
      //   width: 125,
      //   renderer({ value }) {
      //     console.log({ value, states });
      //     return states.find((state) => state.id === value)?.name;
      //   },
      //   editor: {
      //     type: "combo",
      //     displayField: "text",
      //     valueField: "value",

      //     // items: states,
      //     // items: [
      //     //   { text: "Stockholm", value: "stockholm" },
      //     //   { text: "Classic", value: "classic" },
      //     //   { text: "Classic-Light", value: "classic-light" },
      //     //   { text: "Classic-Dark", value: "classic-dark" },
      //     //   { text: "Material", value: "material" },
      //     // ],
      //   },
      // },
    ],
  });
  const gridRef = useRef(null);

  useEffect(() => {
    // Bryntum Grid instance
    const grid = gridRef?.current?.instance;
  }, []);

  useEffect(() => {
    fetch("/api/devextreme/load/states")
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.states);
        setStates(data.states);
        // gridRef?.current?.instance.columns.add({
        //   text: "First Name",
        //   field: "firstName",
        // });
      })
      .catch((error) => {
        console.error("Failed to load states data:", error);
      });
  }, []);

  return (
    <>
      <BryntumGrid ref={gridRef} {...gridConfig} />
      <button
        onClick={() => {
          console.log("calling setColumns");
          if (gridRef.current) {
            gridRef.current.instance.columns.add(
              //   {
              //   text: "First Name",
              //   field: "firstName",
              // }
              {
                text: "State",
                field: "stateId",
                width: 125,
                renderer({ value }) {
                  console.log({ value, states });
                  return states.find((state) => state.id === value)?.name;
                },
                editor: {
                  type: "combo",
                  displayField: "text",
                  valueField: "value",

                  items: states,
                  // items: [
                  //   { text: "Stockholm", value: "stockholm" },
                  //   { text: "Classic", value: "classic" },
                  //   { text: "Classic-Light", value: "classic-light" },
                  //   { text: "Classic-Dark", value: "classic-dark" },
                  //   { text: "Material", value: "material" },
                  // ],
                },
              }
            );
          }
        }}
      >
        Add new column
      </button>
    </>
  );
}
