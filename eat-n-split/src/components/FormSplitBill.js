import React from 'react'
import Button from './Button'

function FormSplitBill() {
  return (
    <form className='form-split-bill'>
        <h2>Split a bill with x</h2>
        
        <label for="billValue">💰 Bill value</label>
        <input type="text" />

        <label for="yourexpense">🧍🏻‍♂️ Your expense</label>
        <input type="text" />

        <label for="x'sexpense">👯‍♀️ X's expense</label>
        <input type="text" />

        <label for="payer">Who is paying the bill</label>
        <select name="payer" id="payer">
            <option value="user">You</option>
            <option value="friend">X</option>
        </select>

        <Button>Split bill</Button>
    </form>
  )
}

export default FormSplitBill