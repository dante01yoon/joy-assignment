export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_FULFILLED = "FETCH_DATA_FULFILLED"; 
export const FETCH_DATA_CANCELLED = "FETCH_DATA_CANCELLED";
export const FETCH_DATA_REJECTED = "FETCH_DATA_REJECTED"; 

export type FETCH_TYPE = {
	type: "FETCH_DATA" |  "FETCH_DATA_FULFILLED" | "FETCH_DATA_CANCELLED" | "FETCH_DATA_REJECTED" ; 
};

export const cancelFetch: () => FETCH_TYPE = ()  => ({
	type: FETCH_DATA_CANCELLED
 });  

export const fetchData: () =>  FETCH_TYPE = () => ({
	type: FETCH_DATA
});

export const fetchFulfilled: () => FETCH_TYPE = () => ({
	type: FETCH_DATA_FULFILLED
});

export const fetchRejected: () => FETCH_TYPE = () => ({
	type: FETCH_DATA_REJECTED
});

