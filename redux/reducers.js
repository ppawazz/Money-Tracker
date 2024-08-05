const initialState = {
  userName: "User",
  saldo: 0,
  mutasiList: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER_NAME":
      return {
        ...state,
        userName: action.payload,
      };
    case "ADD_INCOME":
      return {
        ...state,
        saldo: state.saldo + action.payload.amount,
        mutasiList: [
          ...state.mutasiList,
          {
            type: "pemasukan",
            amount: action.payload.amount,
            description: action.payload.description,
          },
        ],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        saldo: state.saldo - action.payload.amount,
        mutasiList: [
          ...state.mutasiList,
          {
            type: "pengeluaran",
            amount: action.payload.amount,
            description: action.payload.description,
          },
        ],
      };
    default:
      return state;
  }
}

export default rootReducer;
