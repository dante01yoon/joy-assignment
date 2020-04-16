export type NationalData = {
	name: string,
	alpha2Code : string,
	callingCodes : string[],
	capital: string,
	region: string
}
export type ViewModel = NationalData[]; 