import { getCurrentVersion } from "../getCurrentVersion";
import { getPackageJson } from "../getPackageJson";
import { getPackageJsonVersion } from "../getPackageJsonVersion"

(async () => {
	const { packageJson } = await getPackageJson({
		"branch": "cra-template-gitlanding",
		"repo_name": "gitlanding",
		"repo_owner": "thieryw"
	})
	const { currentVersion } = await getCurrentVersion({
		packageJson
	});
	const { packageJsonVersion } = getPackageJsonVersion({
		packageJson
	})

	console.log(currentVersion);
	console.log(packageJsonVersion);
	console.log(packageJson);



})()


