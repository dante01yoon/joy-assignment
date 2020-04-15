export type NationalData = {
	name: string,
	alpha2Code : string,
	callingCodes : number[],
	capital: string,
	region: string
}
export type ViewModel = NationalData[]; 