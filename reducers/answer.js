export const initialState = {
	ans: [],
	url: {
		thumbUrl: "",
	},
	isDirect: true,
};

export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_URL = "ADD_URL";
export const MAKE_DIRECT_FALSE = "MAKE_DIRECT_FALSE";
export const MAKE_DIRECT_TRUE = "MAKE_DIRECT_TRUE";
export const CLEAR_URLS = "CLEAR_URLS";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ANSWER: {
			return {
				...state,
				ans: action.data,
			};
		}
		case ADD_URL: {
			return {
				...state,
				url: action.data,
			};
		}
		case MAKE_DIRECT_FALSE: {
			return {
				...state,
				isDirect: false,
			};
		}
		case MAKE_DIRECT_TRUE: {
			return {
				...state,
				isDirect: true,
			};
		}
		case CLEAR_URLS: {
			return {
				...state,
				url: {
					thumbUrl: "",
				},
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default reducer;
