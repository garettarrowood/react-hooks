import React, { useState } from 'react'

const AddUserForm = props => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (!user.name || !user.username) return

    props.addUser(user)
    setUser(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
          name="name"
          onChange={handleInputChange}
          type="text"
          value={user.name}
      />
      <label>{'Username'}</label>
      <input
          name="username"
          onChange={handleInputChange}
          type="text"
          value={user.username}
      />
      <button>{'Add new user'}</button>
    </form>
  )
}

export default AddUserForm
