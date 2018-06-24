export const DEFAULT_ERROR_STATE = {
  level: '',
  message: ''
}

export const DEFAULT_SPECS_STATE = {
  byId: {},
  allIds: []
}

export const DEFAULT_PREVIEWS_STATE = {
  byId: {},
  allIds: []
}

export const DEFAULT_APP_STATE = {
  specs: DEFAULT_SPECS_STATE,
  previews: DEFAULT_PREVIEWS_STATE,
  error: DEFAULT_ERROR_STATE
}
