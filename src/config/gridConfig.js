// const schedulerConfig = {
//   startDate: startDate,
//   zoomOnMouseWheel: false,
//   zoomOnTimeAxisDoubleClick: false,
//   viewPreset: "hourAndDay",
//   columns: [
//     {
//       type: "resourceInfo",
//       text: "Name",
//       field: "name",
//       width: 150,
//       showImage: false,
//     },
//   ],
// };

// export { schedulerConfig };

const gridConfig = {
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
    {
      text: "First Name",
      field: "firstName",
    },
    {
      text: "Last Name",
      field: "lastName",
    },
    {
      text: "Position",
      field: "position",
      width: 170,
    },
    {
      text: "State",
      field: "stateId",
      width: 125,
      editor: {
        type: "combo",
        items: DataGenerator.cities,
      },
    },
  ],
};

export { gridConfig };
