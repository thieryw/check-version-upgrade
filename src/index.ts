import { getInput, setOutput } from "@actions/core";
import { execSync } from "child_process";
import fetch from "node-fetch";

const repoName = getInput("repo_name");

const repoOwner = getInput("repo_owner");

const branch = getInput("branch");

async function getPackageJsonVersion(params: {
	repoName: string;
	repoOwner: string;
	branch: string;
}) {
	const {branch, repoName, repoOwner} = params;
	const out = JSON.parse(await 
		(
			await 
				fetch(`https://raw.github.com/${repoOwner}/${repoName}/${branch}/package.json`)
		)
		.text())["version"];

		return out;

};

function getCurrentVersion(params: {
	repoName: string;
}){

	const { repoName } = params;

	return execSync(`npm view ${repoName} version`).toString();

}

async function isVersionUpgraded(){
	const packageJsonVersion = await getPackageJsonVersion({
		branch,
		repoName,
		repoOwner
	});
	const currentVersion = getCurrentVersion({
		repoName
	});

	setOutput("is_upgraded", packageJsonVersion > currentVersion);
}

isVersionUpgraded();





