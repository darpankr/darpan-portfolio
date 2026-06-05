// Replace these with your values
const owner = "darpankr";
const repo = "Portfolio";
const path = "public/config.json";
const token = process.env.GITHUB_TOKEN;
const branch = "main"; // or your branch

async function updateConfigJson(newJsonContent) {
  // 1. Get the current file SHA
  const getRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`,
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github+json",
      },
    }
  );
  const fileData = await getRes.json();

  // 2. Prepare the update payload
  const content = Buffer.from(JSON.stringify(newJsonContent, null, 2)).toString("base64");
  const payload = {
    message: "Update config.json via API",
    content,
    sha: fileData.sha,
    branch,
  };

  // 3. PUT to update the file
  const putRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (putRes.ok) {
    console.log("config.json updated successfully!");
  } else {
    const err = await putRes.text();
    console.error("Failed to update:", err);
  }
}

// Example usage:
// updateConfigJson({ foo: "bar" }); // Pass your new JSON object here

export async function POST(request) {
  const owner = "darpankr";
  const repo = "Portfolio";
  const path = "public/config.json";
  const token = process.env.GITHUB_TOKEN;
  const branch = "main";

  // 1. Get the field to update from the request body
  const { field, value } = await request.json();

  // 2. Fetch the current config.json and its SHA
  const getRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`,
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github+json",
      },
    }
  );
  const fileData = await getRes.json();
  const currentConfig = JSON.parse(Buffer.from(fileData.content, "base64").toString("utf-8"));

  // 3. Update the single field (top-level only)
  if (
    typeof currentConfig[field] === "object" &&
    currentConfig[field] !== null &&
    typeof value === "object" &&
    value !== null
    ) {
    currentConfig[field] = { ...currentConfig[field], ...value };
    } else {
    currentConfig[field] = value;
    }

  // 4. Prepare the update payload
  const content = Buffer.from(JSON.stringify(currentConfig, null, 2)).toString("base64");
  const payload = {
    message: `Update ${field} in config.json via API`,
    content,
    sha: fileData.sha,
    branch,
  };

  // 5. PUT to update the file
  const putRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (putRes.ok) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } else {
    const err = await putRes.text();
    return new Response(JSON.stringify({ success: false, error: err }), { status: 500 });
  }
}