import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages
      }
    case REMOVE_STORY:
      const newStory = state.hits.filter((story) => story.objectID !== action.payload)
      return { ...state, hits: newStory }
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 }
    case HANDLE_PAGE:
      let newPage = state.page + action.payload;
      if (newPage > state.nbPages - 1) {
        newPage = 0
      }
      if (newPage < 0) {
        newPage = state.nbPages - 1;
      }
      return {...state, page: newPage}  
      break;

    default:
      throw new Error(`no matching "${action.type}" action type`);
      break;
  }
}
export default reducer
