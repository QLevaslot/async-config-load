import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchConfig } from '../actions'
import ConfigTest from '../components/ConfigTest'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    // After the first render of App, we go fetch the config
    const { dispatch } = this.props
    dispatch(fetchConfig())
  }

  render() {
    return (<div>
      This text gets displayed even if the application has not yet fetched the configuration.
      <ConfigTest message="Config Loaded!"/>
    </div>)
  }
}

export default connect()(App)
