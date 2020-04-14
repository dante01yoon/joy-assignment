export type NationalData = {
	name: string,
	alpha2Code : string,
	callingCode : number[],
	capital: string,
	region: string
}
export type ViewModel = NationalData[]; 