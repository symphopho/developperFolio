require("dotenv").config();
const https = require("https");
const fs = require("fs");

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA === "true";
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

if (!GITHUB_USERNAME || !GITHUB_TOKEN) {
  throw new Error("Github Username or Token is undefined. Please set all relevant environment variables.");
}

console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

const data = JSON.stringify({
  query: `
    {
      user(login: "${GITHUB_USERNAME}") {
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazerCount
                url
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `
});

const options = {
  hostname: "api.github.com",
  path: "/graphql",
  method: "POST",
  headers: {
    "Authorization": `Bearer ${GITHUB_TOKEN}`,
    "User-Agent": "Node.js",
    "Content-Type": "application/json"
  }
};

const req = https.request(options, res => {
  let body = "";

  res.on("data", chunk => {
    body += chunk;
  });

  res.on("end", () => {
    try {
      const json = JSON.parse(body);
      fs.writeFileSync("public/profile.json", JSON.stringify(json, null, 2));
      console.log("✔️ GitHub profile data saved to public/profile.json");
    } catch (e) {
      console.error("❌ Failed to save GitHub profile data:", e);
    }
  });
});

req.on("error", error => {
  console.error("❌ Request failed:", error);
});

req.write(data);
req.end();
