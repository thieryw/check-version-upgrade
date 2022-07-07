import fetch from "node-fetch";
import urlJoin from "url-join";

export async function getPackageJson(params: {
	repo_name: string;
	repo_owner: string;
	branch: string;
}){

	const {branch, repo_name, repo_owner} = params;

	const out = await new Promise<Record<string, unknown>>(async resolve => {
		try {
			resolve(
				JSON.parse(await (
					await fetch(urlJoin(
						"https://raw.github.com",
						repo_owner,
						repo_name,
						branch,
						"package.json"
					))
				).text()
				))
		} catch {
			throw new Error("repo_name, repo_owner or branch does not exist and therefor the url to fetch the package.json file from does not exist !")

		}
	})

	return { "packageJson": out };

};