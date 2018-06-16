export const getAllPreviews = (state) => (state.previews.allIds.map((id)=> (state.previews.byId[id])));
