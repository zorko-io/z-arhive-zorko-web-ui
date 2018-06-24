import { DEFAULT_PREVIEWS_STATE } from '../state'
import { SPEC_LOOKUPS_SET } from '../action'

const initialState = { ...DEFAULT_PREVIEWS_STATE }

export default function previewReducer(state = initialState, action) {
  switch (action.type) {
    case SPEC_LOOKUPS_SET:
      const previews = action.payload
      return {
        ...state,
        byId: previews.reduce(
          (memo, preview) => ({
            ...memo,
            [preview.id]: preview
          }),
          {}
        ),
        allIds: previews.map((preview) => preview.id)
      }
    default:
      return state
  }
}
