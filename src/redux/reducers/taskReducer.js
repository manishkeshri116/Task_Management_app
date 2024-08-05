export const initialState = {
    tasks: [],
    loading: true,
    error: null,
  };
  
  export const taskReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_TASKS_SUCCESS':
        return { ...state, tasks: action.payload, loading: false };
      case 'FETCH_TASKS_ERROR':
        return { ...state, error: action.payload, loading: false };
      case 'CREATE_TASK_SUCCESS':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'UPDATE_TASK_SUCCESS':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task._id === action.payload._id ? action.payload : task
          ),
        };
      case 'DELETE_TASK_SUCCESS':
        return {
          ...state,
          tasks: state.tasks.filter(task => task._id !== action.payload),
        };
      default:
        return state;
    }
  };
  