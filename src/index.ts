import { getInputsFactory } from "./getInputs";
import { getPackageJson } from "./getPackageJson";
import { getCurrentVersion } from "./getCurrentVersion";
import { getPackageJsonVersion } from "./getPackageJsonVersion";
//import { setIsVersionUpgradedOutput } from "./setIsVersionUpgradedOutput";
import { setOutput } from "@actions/core";


const { getInputs } = getInputsFactory({
	"inputNames": [
		"repo_name",
		"repo_owner",
		"branch"
	]
})

const { branch, repo_name, repo_owner } = getInputs();

(async () => {
	const { packageJson } = await getPackageJson({
		branch,
		repo_name,
		repo_owner
	})

	const { currentVersion } = await getCurrentVersion({
		packageJson
	});
	const { packageJsonVersion } = getPackageJsonVersion({
		packageJson
	});

	/*setIsVersionUpgradedOutput({
		currentVersion,
		packageJsonVersion
	})*/
	setOutput("is_upgraded", true);
	setOutput("package_version", "ok");


})();







