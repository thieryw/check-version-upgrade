import { setOutput } from "@actions/core";

export function setIsVersionUpgradedOutput(params: {
	currentVersion: string | null;
	packageJsonVersion: string;

}) {
	const { currentVersion, packageJsonVersion } = params;
	setOutput("package_version", "ok");
	setOutput("is_upgraded",

		(() => {
			if (currentVersion === null) {
				return false
			};
			return packageJsonVersion > currentVersion;
		})()
	);
};