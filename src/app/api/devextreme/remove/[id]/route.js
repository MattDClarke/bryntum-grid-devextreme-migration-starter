import { DevExtremeEmployee } from "@/models";

export async function DELETE(_, { params }) {
  const id = params.id;
  try {
    await DevExtremeEmployee.destroy({ where: { id } });
    return Response.json({ success: true });
  } catch (error) {
    return new Response("Removing employee failed", {
      status: 400,
    });
  }
}
