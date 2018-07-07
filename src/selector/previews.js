import { ROUNTE_SPECS_PAGGINATION } from '../constant/route'

export const getAll = (state) => state.previews.allIds.map((id) => state.previews.byId[id])

export const getPageNumber = (state) => {
  const offset = state.previews.offset
  return Math.floor(offset / 6)
}

export const getPreviousUrl = (state) => {
  const pageNumber = getPageNumber(state) - 1
  return ROUNTE_SPECS_PAGGINATION.replace(':specId', pageNumber)
}

export const getNextUrl = (state) => {
  const pageNumber = getPageNumber(state) + 1
  return ROUNTE_SPECS_PAGGINATION.replace(':specId', pageNumber)
}

export const getLimit = (state) => state.previews.limit

export const getOffset = (state) => state.previews.offset
