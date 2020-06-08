import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    props.updateUser(user.id, user)
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form onSubmit={handleSubmit}>
      <label>{'Name'}</label>
      <input
          name="name"
          onChange={handleInputChange}
          type="text"
          value={user.name}
      />
      <label>{'Username'}</label>
      <input
          name="username"
          type="text"
          onChange={handleInputChange}
          value={user.username}
      />
      <label>{'Spirit Animal'}</label>
      <input
          name="spiritAnimal"
          type="text"
          onChange={handleInputChange}
          value={user.spiritAnimal}
      />
      <button>{'Update user'}</button>
      <button
          className="button muted-button"
          onClick={() => props.setEditing(false)}>
        {'Cancel'}
      </button>
    </form>
  )
}

export default EditUserForm
