// import { laptopModel } from "./laptopModel";
let laptopModel = [
	{
		laptopID: 1,
		name: "XPS 13",
		step1: 4,
		step2: 2,
		step3: 2,
		totalTime: 8,
		colour: "Sienna",
	},
	{
		laptopID: 2,
		name: "XPS 15",
		step1: 4,
		step2: 2,
		step3: 3,
		totalTime: 9,
		colour: "DarkGoldenRod",
	},
	{
		laptopID: 3,
		name: "Inspiron 3567",
		step1: 3,
		step2: 1,
		step3: 2,
		totalTime: 6,
		colour: "Coral",
	},
	{
		laptopID: 4,
		name: "Inspiron 5379",
		step1: 3,
		step2: 2,
		step3: 2,
		totalTime: 7,
		colour: "BlueViolet",
	},
	{
		laptopID: 5,
		name: "Inspiron 7567",
		step1: 3,
		step2: 2,
		step3: 3,
		totalTime: 8,
		colour: "DarkSalmon",
	},
	{
		laptopID: 6,
		name: "Vostro 3568",
		step1: 1,
		step2: 3,
		step3: 3,
		totalTime: 7,
		colour: "ForestGreen",
	},
	{
		laptopID: 7,
		name: "Vostro 5370",
		step1: 2,
		step2: 3,
		step3: 3,
		totalTime: 8,
		colour: "Violet",
	},
	{
		laptopID: 8,
		name: "Latitude 5480",
		step1: 1,
		step2: 2,
		step3: 1,
		totalTime: 4,
		colour: "Magenta",
	},
	{
		laptopID: 9,
		name: "Alienware 15",
		step1: 2,
		step2: 4,
		step3: 2,
		totalTime: 8,
		colour: "MistyRose",
	},
	{
		laptopID: 10,
		name: "Alienware 17",
		step1: 2,
		step2: 4,
		step3: 3,
		totalTime: 9,
		colour: "DarkOrchid",
	},
];
export default class ForecastDataCreator {
	constructor(forecast) {
		this.forecast = forecast;
	}

	startProcess = () => {
		let ans = new Array();
		for (let key in this.forecast) {
			let deadlineDate = new Date(key);
			deadlineDate.setDate(deadlineDate.getDate() + 5);
			deadlineDate = deadlineDate.toISOString().split("T")[0];
			// console.log(deadlineDate);
			for (let i = 0; i < this.forecast[key].length; i++) {
				ans.push({
					name: laptopModel[parseInt(this.forecast[key][i].item) - 1],
					time: laptopModel[parseInt(this.forecast[key][i].item) - 1].totalTime,
					quantity: parseInt(this.forecast[key][i].demand),
					date: deadlineDate,
				});
			}
		}
		console.log(ans);
		return { ans };
	};
}


