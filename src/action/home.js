export const HOME_PAGE_INIT = 'HOME_PAGE_INIT'

export const homePageInit = (match) => ({
  type: HOME_PAGE_INIT,
  payload: { match }
})
