const apiDomain = process.env.NEXT_PUBLIC_API_URL || null;

async function fetchProperties() {
  try {
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error("An error occurred");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { fetchProperties };
