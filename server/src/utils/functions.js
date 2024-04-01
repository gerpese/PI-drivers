

	const infoCleaner = (arr) => {
		return arr.map((driver)=> {
			return {
				id: driver.id,
				name: driver.name,
				surename: driver.surename,
				description: driver.description,
				created: false
				};
			});
	};


module.exports = {
	infoCleaner
}