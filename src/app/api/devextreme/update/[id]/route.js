import { DevExtremeEmployee } from "@/models";

export async function PUT(request, { params }) {
  const id = params.id;
  const reqBody = await request.json();

  try {
    await DevExtremeEmployee.update(reqBody, { where: { id } });
    const newEmployee = await DevExtremeEmployee.findByPk(id);

    return Response.json(newEmployee);
  } catch (error) {
    return new Response("Updating appointments data failed", {
      status: 400,
    });
  }
}
