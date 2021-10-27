import { TYPES } from '../actions';

export const dataInitialState = {
  reserves: [],
  reservesByStatus: {
    canceled: {
      reserves: [],
    },
    class: {
      reserves: [],
    },
    attend: {
      reserves: [],
    },
    confirmed: {
      reserves: [],
    },
    locked: {
      reserves: [],
    },
    reserved: {
      reserves: [],
    },
    on_hold: {
      reserves: [],
    },
    pending: {
      reserves: [],
    },
    does_not_attend: {
      reserves: [],
    },
  },
  // reservesByStatus: {
  //   attend: {
  //     reserves: [],
  //     name: 'attend',
  //     // bgColor: "#FAB5F8",
  //   },

  //   locked: {
  //     reserves: [],
  //     name: 'locked',
  //     // bgColor: "#CACACA",
  //   },
  //   class: {
  //     reserves: [],
  //     name: 'Class',
  //     // bgColor: "#F98753",s
  //   },
  //   reserved: {
  //     reserves: [],
  //     name: 'reserved',
  //     // bgColor: "#77D0FA",
  //   },
  //   confirmed: {
  //     reserves: [],
  //     name: 'confirmed',
  //     // bgColor: "#ECBE51",
  //   },
  //   on_hold: {
  //     reserves: [],
  //     name: 'En Espera',
  //     // bgColor: "#B6ED80",
  //   },
  //   pending: {
  //     reserves: [],
  //     name: 'pending',
  //     // bgColor: "#FD8991",
  //   },
  //   canceled: {
  //     reserves: [],
  //     name: 'canceled',
  //     // bgColor: "#F96140",
  //   },
  //   doest_not_attend: {
  //     reserves: [],
  //     name: 'No attend',
  //     // bgColor: "#FBC183",
  //   },
  // },
  error: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.READ_DATA: {
      return {
        ...state,
        reserves: action.payload,
      };
    }

    case TYPES.ADD_TO: {
      const { status, data } = action.payload;
      return {
        ...state,
        reservesByStatus: {
          ...state.reservesByStatus,
          [status]: {
            ...state.reservesByStatus[status],
            reserves: [...state.reservesByStatus[status].reserves, data],
          },
        },
      };
    }

    case TYPES.MOVE_TO: {
      const { from, data, to } = action.payload;
      return {
        ...state,
        reservesByStatus: {
          ...state.reservesByStatus,
          [to]: {
            ...state.reservesByStatus[to],
            reserves: [...state.reservesByStatus[to].reserves, data],
          },
          [from]: {
            ...state.reservesByStatus[from],
            reserves: state.reservesByStatus[from].reserves.filter((el) => el.id !== data.id),
          },
        },
      };
    }

    case TYPES.CANCEL: {
      const { from, data } = action.payload;
      let canceled = state.reservesByStatus.canceled.reserves;
      let includes = canceled.includes(data);
      if (!includes) {
        return {
          ...state,
          reservesByStatus: {
            ...state.reservesByStatus,
            [from]: {
              ...state.reservesByStatus[from],
              reserves: state.reservesByStatus[from].reserves.filter((el) => el.id !== data.id),
            },
            canceled: {
              ...state.reservesByStatus.canceled,
              reserves: [...state.reservesByStatus.canceled.reserves, data],
            },
          },
        };
      } else {
        alert('El objeto ya se encuentra canceled');
        return state;
      }
    }

    case TYPES.SET_ERROR: {
      const PROVITIONAL_ERROR = {
        status: '404',
        statusText: 'Not Found',
      };
      return {
        ...state,
        error: Object.keys(action.payload).length > 0 ? action.payload : PROVITIONAL_ERROR,
      };
    }

    case TYPES.FILTER_BY_DATES: {
      console.log(action.payload);
      return {
        ...state,
        reservesByStatus: {
          ...state.reservesByStatus,
          attend: {
            ...state.reservesByStatus.attend,
            reserves: [
              ...state.reservesByStatus.attend.reserves.filter((el) => {
                let start = new Date(el.start).getTime();
                return start >= action.payload.start && start <= action.payload.end;
              }),
            ],
          },

          locked: {
            ...state.reservesByStatus.locked,
            reserves: [
              ...state.reservesByStatus.locked.reserves.filter((el) => {
                let start = new Date(el.start).getTime();
                return start >= action.payload.start && start <= action.payload.end;
              }),
            ],
          },
          class: {
            ...state.reservesByStatus.class,
            reserves: [
              ...state.reservesByStatus.class.reserves.filter((el) => {
                let start = new Date(el.start).getTime();
                return start >= action.payload.start && start <= action.payload.end;
              }),
            ],
          },
          reserved: {
            ...state.reservesByStatus.reserved,
            reserves: [
              ...state.reservesByStatus.reserved.reserves.filter((el) => {
                let start = new Date(el.start).getTime();
                return start >= action.payload.start && start <= action.payload.end;
              }),
            ],
          },
          confirmed: {
            ...state.reservesByStatus.confirmed,
            reserves: [
              ...state.reservesByStatus.confirmed.reserves.filter((el) => {
                let start = new Date(el.start).getTime();
                return start >= action.payload.start && start <= action.payload.end;
              }),
            ],
          },
          on_hold: {
            ...state.reservesByStatus.on_hold,
            reserves: [
              ...state.reservesByStatus.on_hold.reserves.filter((el) => {
                let start = new Date(el.start).getTime();
                return start >= action.payload.start && start <= action.payload.end;
              }),
            ],
          },
          pending: {
            ...state.reservesByStatus.pending,
            reserves: [
              ...state.reservesByStatus.pending.reserves.filter((el) => {
                let start = new Date(el.start).getTime();
                return start >= action.payload.start && start <= action.payload.end;
              }),
            ],
          },
          canceled: {
            ...state.reservesByStatus.canceled,
            reserves: [
              ...state.reservesByStatus.canceled.reserves.filter((el) => {
                let start = new Date(el.start).getTime();
                return start >= action.payload.start && start <= action.payload.end;
              }),
            ],
          },
          does_not_attend: {
            ...state.reservesByStatus.does_not_attend,
            reserves: [
              ...state.reservesByStatus.does_not_attend.reserves.filter((el) => {
                let start = new Date(el.start).getTime();
                return start >= action.payload.start && start <= action.payload.end;
              }),
            ],
          },
        },
      };
    }

    default:
      return state;
  }
};
