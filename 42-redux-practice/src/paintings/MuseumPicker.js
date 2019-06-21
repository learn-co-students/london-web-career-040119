import React from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

const MuseumPicker = ({ updateFilter, filter }) => {
  return (
    <div className="row">
      <div className="ui menu">
        <div className={`item ${filter === '' ? 'active' : ''}`} onClick={() => updateFilter('')}>
          All Museums
        </div>
        <div className={`item ${filter === 'National Gallery of Art, Washington D.C.' ? 'active' : ''}`} onClick={(e) => updateFilter(e.target.innerText)}>
          National Gallery of Art, Washington D.C.
        </div>
        <div className={`item ${filter === 'Nice' ? 'active' : ''}`} onClick={(e) => updateFilter(e.target.innerText)}>
          Nice
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.filter
})

export default connect(mapStateToProps, actions)(MuseumPicker);
