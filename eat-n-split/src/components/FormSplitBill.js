import React from 'react'
import Button from './Button'

function FormSplitBill({selectedFriend}) {
  return (
    <form className='form-split-bill'>
        <h2>Split a bill with {selectedFriend.name}</h2>
        
        <label htmlFor="billValue">💰 Bill value</label>
        <input type="text" />

        <label htmlFor="yourexpense">🧍🏻‍♂️ Your expense</label>
        <input type="text" />

        <label htmlFor="x'sexpense">👯‍♀️ {selectedFriend.name}'s expense</label>
        <input type="text" />

        <label htmlFor="payer">Who is paying the bill</label>
        <select name="payer" id="payer">
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split bill</Button>
    </form>
  )
}

export default FormSplitBill