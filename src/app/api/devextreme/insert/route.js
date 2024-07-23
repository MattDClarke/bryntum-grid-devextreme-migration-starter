import { DevExtremeEmployee } from "@/models";

export async function POST(request, { params }) {

  const reqBody = await request.json();

  try {
    const employee = await DevExtremeEmployee.create(reqBody);
    // const employeeData = employee._previousDataValues
    // Get the default values from the model's attributes
    const allFields = {};
    Object.keys(DevExtremeEmployee.getAttributes()).forEach((field) => {
      allFields[field] = employee[field] !== undefined ? employee[field] : null;
    });
    return Response.json(allFields);
  } catch (error) {
    return new Response("Adding employee failed", {
      status: 500,
    });
  }
}
