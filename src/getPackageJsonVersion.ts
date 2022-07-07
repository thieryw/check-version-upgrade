
export function getPackageJsonVersion(params: {
	packageJson: Record<string, unknown>;
}) {
	const { packageJson } = params;
	return { "packageJsonVersion": (packageJson["version"] as string) };
}