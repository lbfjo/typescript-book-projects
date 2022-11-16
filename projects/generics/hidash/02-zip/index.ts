// Write your zip function here! ✨
// You'll need to export it so the tests can run it.

export function zip<T, Y>(a: T[], b: Y[]) {
	let arrayOfResults: (T | Y)[] = [];
	let i: number;

	for (i = 0; i < Math.min(a.length, b.length); i += 1) {
		arrayOfResults.push(a[i]);
		arrayOfResults.push(b[i]);
	}
	for (const remaining of [a, b]) {
		for (; i < remaining.length; i += 1) {
			arrayOfResults.push(remaining[i]);
		}
	}
}
