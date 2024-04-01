import { connectToDB } from "@/utils/database";

export const GET = async (request: Request) => {
  await connectToDB();

  return new Response(JSON.stringify(process.env.NEXT_URL));
};
