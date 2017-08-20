
export const CONFIG_INIT = 'CONFIG_INIT'

const configUrl = 'http://localhost:8080/config.json'

const initConfig = config => ({
  type: CONFIG_INIT,
  config
})

export const fetchConfig = reddit => dispatch => {
  return fetch(configUrl)
    .then(response => response.json())
    .then(json => dispatch(initConfig(json)))
}

