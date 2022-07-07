import { exec } from "child_process";

export async function getCurrentVersion(params: {
	packageJson: Record<string, unknown>;
}) {

	const { packageJson } = params;
	const out = await new Promise<string | null>(resolve => {
		exec(`npm view ${packageJson["name"]} version`, (err, out) => {
			if(err !== null){
				resolve(null);
				return;
			}

			resolve(out);
		})
	})

	return { "currentVersion": out }


}