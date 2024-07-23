import { DevExtremeEmployee } from "@/models";

export async function PUT(request, { params }) {
  const id = params.id;
  const reqBody = await request.json();

  try {
    await DevExtremeEmployee.update(reqBody, { where: { id } });
    const updatedEmployee = await DevExtremeEmployee.findByPk(id);

    return Response.json(updatedEmployee);
  } catch (error) {
    return new Response("Updating employees data failed", {
      status: 500,
    });
  }
}
