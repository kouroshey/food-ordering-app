import React from 'react'

const Card = (props) => {
  return (
      <>
          <div className="card border-sm border-gray-300 border rounded-md shadow-md p-2">
              {props.children}
        </div>
      </>
  )
}

export default Card