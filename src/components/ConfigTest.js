import React from 'react'
import { compose } from 'react-redux'
import withLoader from '../hoc/withLoader'

const configTest = ({ message }) => (<div>
  {message}!
</div>)

export default withLoader(configTest)
