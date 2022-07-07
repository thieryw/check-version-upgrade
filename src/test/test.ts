import { getCurrentVersion } from "../getCurrentVersion";
import { getPackageJson } from "../getPackageJson";
import { getPackageJsonVersion } from "../getPackageJsonVersion"

(async () => {
	const { packageJson } = await getPackageJson({
		"branch": "f1fd26aebfa290946ad872773681252f8c903073",
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

	if(currentVersion === null){
		console.log("null");
		return;
	}

	if(packageJsonVersion > currentVersion){
		console.log("upgrade");
		return;

	}

	console.log("not upgrade")



})()


