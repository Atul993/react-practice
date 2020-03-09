import React, { useState } from 'react'
import Button from './Button'

function FormSplitBill({selectedFriend}) {

  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  return (
    <form className='form-split-bill'>
        <h2>Split a bill with {selectedFriend.name}</h2>
        
        <label htmlFor="billValue">💰 Bill value</label>
        <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

        <label htmlFor="yourexpense">🧍🏻‍♂️ Your expense</label>
        <input type="text" value={paidByUser} onChange={(e) => setPaidByUser(  Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

        <label htmlFor="x'sexpense">👯‍♀️ {selectedFriend.name}'s expense</label>
        <input type="text" disabled value={paidByFriend} />

        <label htmlFor="payer">Who is paying the bill</label>
        <select name="payer" id="payer" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split bill</Button>
    </form>
  )
}

export default FormSplitBill