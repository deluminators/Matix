export default class RefactorData {
	constructor(data) {
		this.data = data;
	}

	start = () => {
		const dates = [...new Set(this.data.map((el) => el.date))];
		// console.log(dates);
		const some = dates.map((el) => {
			return this.data.filter((e) => e.date === el);
		});
		// console.log(some);
		const obj = {};
		some.forEach((el) => {
			let date = el[0].date;
			obj[date] = el.map((e) => {
				return { item: e.item, demand: e.demand };
			});
		});
		console.log(obj);
		const mat = [];
		const m = some.map((el) => {
			return el.reduce((acc, el) => {
				return acc + el.demand * 1;
			}, 0);
		});
		mat.push(m);
		// console.log(mat);
		return obj;
	};
}
