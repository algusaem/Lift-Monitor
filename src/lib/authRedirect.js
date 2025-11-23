import { redirect } from "next/navigation";
import { getUserId } from "./getUserId";

export async function authRedirect() {
  const userId = await getUserId();
  if (userId) redirect("/dashboard");
}

export async function nonAuthRedirect() {
  const userId = await getUserId();
  if (!userId) redirect("/");
}
