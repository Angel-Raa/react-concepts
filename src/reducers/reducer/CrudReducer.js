import { TYPES } from "../actions/CrudActions";

export const CrudInitialState = {
 datas:null
};
export const CrudReducer = (state, action = {}) => {
  switch (action.type) {
    case TYPES.READ_ALL_DATA: {
      return {
        state,
        datas: action.payload.map((data) => data),
      };
    }
    case TYPES.READ_ONE_DATA: {
      return 2;
    }

    case TYPES.CREATE_DATA: {
      return 3;
    }
    case TYPES.UPDATE_DATA: {
      return 4;
    }

    case TYPES.DELETE_DATA: {
      return 5;
    }
    case TYPES.NOT_FOUND_DATA: {
      return CrudInitialState;
    }
    default:
      return state;
  }
};
