const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer A8RJ3TFTSSMZ7PGP6BZKEKSR66ZT",
};
export const GET = async (urlPath) => {
  return await fetch(`https://beta3.api.climatiq.io/estimate`, {
    headers,
    method: "GET",
  });
};

export const POST = async (body) => {
  const requestOptions = { headers, body, method: "POST" };
  console.log("requestOptions", requestOptions);
  return await fetch(`https://beta3.api.climatiq.io/estimate`, requestOptions);
};

export const PUT = async (body) => {
  const requestOptions = { headers, body, method: "PUT" };
  return await fetch(`https://beta3.api.climatiq.io/estimate`, requestOptions);
};
