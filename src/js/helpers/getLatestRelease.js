import { Octokit } from "@octokit/core";

const octokit = new Octokit();

export const getLatestRelease = async (owner, repo, dispatch) => {
  let latestRelease = await octokit
    .request("GET /repos/{owner}/{repo}/releases/latest", {
      owner,
      repo,
    })
    .catch((err) => {
      //TODO: Different dispatch based on repo exists
      console.log(err);
    });
  return latestRelease;
};
