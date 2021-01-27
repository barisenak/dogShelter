const initialState = {
  userID: "",
  userName: "",
  favorites: [],
  isSignedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN": {
      return {
        ...state,
        isSignedIn: true,
        userID: action.payload.id,
        userName: action.payload.name,
        favorites: action.payload.favorites,
      };
    }

    case "SIGN_OUT": {
      return {
        ...state,
        isSignedIn: false,
        userID: "",
        userName: "",
        favorites: "",
        typedPhone: "",
      };
    }

    case "CHANGE_FAV": {
      return { ...state, favorites: action.payload };
    }

    case "TYPE_PHONE": {
      return { ...state, typedPhone: action.payload }; //
    }

    default:
      return state;
  }
};

export default reducer;
