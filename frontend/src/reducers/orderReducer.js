import { ORDER_ADD_ITEM, ORDER_REMOVE_ITEM } from '../constants/orderConstants';

export const orderReducer = (state = { orderItems: [] }, action) => {
  switch (action.type) {
    case ORDER_ADD_ITEM:
      const item = action.payload;
      const existItem = state.orderItems.find((x) => x.meal === item.meal);

      if (existItem) {
        return {
          ...state,
          orderItems: state.orderItems.map((x) =>
            x.meal === existItem.meal ? item : x
          ),
        };
      } else {
        return {
          ...state,
          orderItems: [...state.orderItems, item],
        };
      }

    case ORDER_REMOVE_ITEM:
      return {
        ...state,
        orderItems: state.orderItems.filter((x) => x.meal !== action.payload),
      };
    default:
      return state;
  }
};
