import { setOutput } from "@actions/core";

export function setIsVersionUpgradedOutput(params: {
	currentVersion: string | null;
	packageJsonVersion: string;

}) {
	const { currentVersion, packageJsonVersion } = params;
	setOutput("is_upgraded", 
		(()=>{
			if(currentVersion === null){
				return false
			};

			const isPackageJsonVersionLarger = (()=>{
				const pjVersionNArr = versionToNumberArr(packageJsonVersion);
				const cVersionNArr = versionToNumberArr(currentVersion);
				for(const n of [0, 1, 2]){
					if(pjVersionNArr[n] > cVersionNArr[n]){
						return true;
					}

					return false;
				};
			})()

			return isPackageJsonVersionLarger;
		})()
	);
};

function versionToNumberArr(version: string){
	return version.split(".").map(str => parseInt(str));
};