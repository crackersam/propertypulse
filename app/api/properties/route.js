import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Property.find({});

    return new Response(properties);
  } catch (error) {
    console.log(error);
    return new Response("An error occurred", {
      status: 500,
    });
  }
};
