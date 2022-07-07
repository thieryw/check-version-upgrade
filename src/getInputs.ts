import { getInput } from "@actions/core";


export function getInputsFactory<T extends string>(params: {
	inputNames: T[]
}) {
	const { inputNames } = params;
	function getInputs(){
		const params: Record<T, string> = {} as any;
		inputNames.forEach(name => params[name] = getInput(name));
		return params;
	}

	return { getInputs }
}


