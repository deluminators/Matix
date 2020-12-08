import { laptopModel } from "../../optimization/laptopModel";

export default class LaptopTableHelper {
	getNames = () => {
		let names = new Array();
		for (let i = 0; i < laptopModel.length; i++) {
			names.push(laptopModel[i].name);
		}
		return names;
	};

	getStepHours = () => {
		let hours = new Array();
		let data = [];
		for (let i = 0; i < laptopModel.length; i++) {
			data.push({ name: laptopModel[i].name, step1: laptopModel[i].step1, step2: laptopModel[i].step2, step3: laptopModel[i].step3 });
			let individual = new Array();
			if (laptopModel[i].step1 != 1) individual.push(`${laptopModel[i].step1} hours`);
			else individual.push(`${laptopModel[i].step1} hour`);
			if (laptopModel[i].step2 != 1) individual.push(`${laptopModel[i].step2} hours`);
			else individual.push(`${laptopModel[i].step2} hour`);
			if (laptopModel[i].step3 != 1) individual.push(`${laptopModel[i].step3} hours`);
			else individual.push(`${laptopModel[i].step3} hour`);

			individual.push(`${laptopModel[i].totalTime} hours`)

			hours.push(individual);
		}

		return {hours,data};
	};
}
