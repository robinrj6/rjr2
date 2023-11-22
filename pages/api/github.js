// /api/github.js
import { Octokit } from "@octokit/rest";

export default async (req, res) => {
  const { repo } = req.query;

  if (!repo) {
    return res.status(400).json({ error: "Missing repo query parameter" });
  }

  const octokit = new Octokit(
    {
      auth: process.env.GITHUB_TOKEN,
    }
  );

  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
      owner: 'robinrj6',
      repo,
    });

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};