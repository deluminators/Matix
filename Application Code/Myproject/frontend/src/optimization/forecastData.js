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

// let forecastData = {
// 	"2020-11-22": [
// 		{ item: "1", demand: "100" },
// 		{ item: "2", demand: "103" },
// 		{ item: "3", demand: "54" },
// 		{ item: "4", demand: "33" },
// 		{ item: "5", demand: "25" },
// 		{ item: "6", demand: "72" },
// 		{ item: "7", demand: "71" },
// 		{ item: "8", demand: "93" },
// 		{ item: "9", demand: "63" },
// 		{ item: "10", demand: "91" },
// 	],
// 	"2020-11-23": [
// 		{ item: "1", demand: "70" },
// 		{ item: "2", demand: "72" },
// 		{ item: "3", demand: "40" },
// 		{ item: "4", demand: "24" },
// 		{ item: "5", demand: "18" },
// 		{ item: "6", demand: "51" },
// 		{ item: "7", demand: "53" },
// 		{ item: "8", demand: "65" },
// 		{ item: "9", demand: "47" },
// 		{ item: "10", demand: "63" },
// 	],
// 	"2020-11-24": [
// 		{ item: "1", demand: "77" },
// 		{ item: "2", demand: "80" },
// 		{ item: "3", demand: "44" },
// 		{ item: "4", demand: "26" },
// 		{ item: "5", demand: "20" },
// 		{ item: "6", demand: "57" },
// 		{ item: "7", demand: "58" },
// 		{ item: "8", demand: "74" },
// 		{ item: "9", demand: "50" },
// 		{ item: "10", demand: "73" },
// 	],
// 	"2020-11-25": [
// 		{ item: "1", demand: "77" },
// 		{ item: "2", demand: "80" },
// 		{ item: "3", demand: "44" },
// 		{ item: "4", demand: "26" },
// 		{ item: "5", demand: "20" },
// 		{ item: "6", demand: "57" },
// 		{ item: "7", demand: "57" },
// 		{ item: "8", demand: "73" },
// 		{ item: "9", demand: "49" },
// 		{ item: "10", demand: "72" },
// 	],
// 	"2020-11-26": [
// 		{ item: "1", demand: "83" },
// 		{ item: "2", demand: "86" },
// 		{ item: "3", demand: "47" },
// 		{ item: "4", demand: "28" },
// 		{ item: "5", demand: "22" },
// 		{ item: "6", demand: "62" },
// 		{ item: "7", demand: "62" },
// 		{ item: "8", demand: "77" },
// 		{ item: "9", demand: "54" },
// 		{ item: "10", demand: "76" },
// 	],
// 	"2020-11-27": [
// 		{ item: "1", demand: "88" },
// 		{ item: "2", demand: "90" },
// 		{ item: "3", demand: "49" },
// 		{ item: "4", demand: "30" },
// 		{ item: "5", demand: "24" },
// 		{ item: "6", demand: "64" },
// 		{ item: "7", demand: "65" },
// 		{ item: "8", demand: "85" },
// 		{ item: "9", demand: "58" },
// 		{ item: "10", demand: "83" },
// 	],
// 	"2020-11-28": [
// 		{ item: "1", demand: "95" },
// 		{ item: "2", demand: "96" },
// 		{ item: "3", demand: "52" },
// 		{ item: "4", demand: "30" },
// 		{ item: "5", demand: "23" },
// 		{ item: "6", demand: "67" },
// 		{ item: "7", demand: "68" },
// 		{ item: "8", demand: "89" },
// 		{ item: "9", demand: "61" },
// 		{ item: "10", demand: "87" },
// 	],
// };
// let forecastData = {
// 	"2020-11-22": [
// 		{ item: "8", demand: "93" },
// 		{ item: "9", demand: "63" },
// 		{ item: "10", demand: "91" },
// 	],
// 	"2020-11-23": [
// 		{ item: "1", demand: "70" },

// 		{ item: "8", demand: "65" },
// 		{ item: "9", demand: "47" },
// 		{ item: "10", demand: "63" },
// 	],
// 	"2020-11-24": [
// 		{ item: "7", demand: "58" },
// 		{ item: "8", demand: "74" },
// 		{ item: "9", demand: "50" },
// 		{ item: "10", demand: "73" },
// 	],
// 	"2020-11-25": [
// 		{ item: "1", demand: "77" },
// 		{ item: "2", demand: "80" },

// 		{ item: "9", demand: "49" },
// 		{ item: "10", demand: "72" },
// 	],
// };

// let x = forecastData.entries();

// for (var key in forecastData) {
// 	console.log(key);
// }
// new ForecastDataCreator(forecastData).startProcess();
// console.log(x);
