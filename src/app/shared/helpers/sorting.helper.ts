export default function sorting(array: any[], prop: string): any[] {
	return array.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
}
