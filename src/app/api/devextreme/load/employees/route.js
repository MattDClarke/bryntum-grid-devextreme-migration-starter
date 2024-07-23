import { DevExtremeEmployee, DevExtremeState } from "@/models";

export async function GET() {
  try {
   const statesPromise = await DevExtremeState.findAll();
   const employeesPromise = await DevExtremeEmployee.findAll();

    const [states, employees] = await Promise.all([statesPromise, employeesPromise]);
    // populate the employees with their states
    employees.forEach((employee) => {
      employee.state = states.find((state) => state.id === employee.stateId);
    });
    return Response.json({ employees });
  } catch (error) {
    return new Response("Loading appointments data failed", {
      status: 400,
    });
  }
}
