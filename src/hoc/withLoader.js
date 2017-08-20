import React from 'react'
import { connect } from 'react-redux'

/**
 * High order component
 * If config is not loader, show loader instead of component
 * Should be called on all components requiring data from config
 * @param ComponentToWrap
 * @returns {*}
 */
const withLoader = (ComponentToWrap) => {
  const withLoaderComponent = (props) => (<div>
    {props.isLoaded ? <ComponentToWrap {...props} /> : <div>Loading</div>}
  </div>)

  const mapStateToProps = state => {
    return {
      isLoaded: state.config
    }
  }
  return connect(mapStateToProps)(withLoaderComponent);
}
export default withLoader;