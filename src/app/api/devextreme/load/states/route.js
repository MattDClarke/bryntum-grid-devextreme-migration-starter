import { DevExtremeState } from "@/models";

export async function GET() {
  try {
   const states = await DevExtremeState.findAll();
    return Response.json({ states });
  } catch (error) {
    return new Response("Loading states data failed", {
      status: 500,
    });
  }
}
