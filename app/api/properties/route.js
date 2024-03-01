import connectDB from "@/config/database";

export const GET = async (request) => {
  try {
    await connectDB();

    return new Response(
      JSON.stringify({ message: "Hello from the API!" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response("An error occurred", {
      status: 500,
    });
  }
};
