import React, { PropTypes, Component }           from 'react'
import classnames                                from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import template                                  from './Footer.jade'

const FILTER_TITLES = {
  [SHOW_ALL]:       'All',
  [SHOW_ACTIVE]:    'Active',
  [SHOW_COMPLETED]: 'Completed'
}

class Footer extends Component {
  render() {
    const { activeCount, completedCount, onClearCompleted, onShow, filter: selectedFilter } = this.props

    return template({
      FILTER_TITLES:    FILTER_TITLES,
      SHOW_ACTIVE:      SHOW_ACTIVE,
      SHOW_ALL:         SHOW_ALL,
      SHOW_COMPLETED:   SHOW_COMPLETED,
      activeCount:      activeCount || 'No',
      classnames:       classnames,
      completedCount:   completedCount,
      onClearCompleted: onClearCompleted,
      onShow:           onShow,
      selectedFilter:   selectedFilter
    })
  }
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
}

export default Footer
