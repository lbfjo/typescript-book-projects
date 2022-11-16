export function unique<Array>(...allItems: Array[][]) {
	const found = new Set<Array>();

	for (const items of allItems) {
		for (const item of items) {
			found.add(item);
		}
	}

	return Array.from(found);
}
