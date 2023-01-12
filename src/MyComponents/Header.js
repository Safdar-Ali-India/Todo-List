import React from 'react'
import PropTypes from 'prop-types'
export default function Header(props) {
  return (
    <nav className="navbar bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href='#'>{props.title}</a>
      
      {props.searchbar?
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>: ""}
    </div>
  </nav>
  )
}


Header.defaultProps = {
    title:  "Your Title here",
    searchBar : true

}
Header.propTypes = {
    title: PropTypes.string, 
    searchBar: PropTypes.bool.isRequired
}