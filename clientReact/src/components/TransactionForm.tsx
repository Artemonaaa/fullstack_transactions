import { FC } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Form } from 'react-router-dom'

const TransactionForm: FC = () => {
  return (
    <div className="rounded-md bg-slate-800 p-4">
      <Form className="grid gap-2" method="post" action="/transactions">
        <label className="grid">
          <span>Title</span>
          <input
            className="input border-slate-700"
            type="text"
            placeholder="Title..."
            name="title"
            required
          />
        </label>
        <label className="grid">
          <span>Amount</span>
          <input
            className="input border-slate-700"
            type="number"
            placeholder="Amount..."
            name="amount"
            required
          />
        </label>

        {/* Select */}
        <label className="grid">
          <span>Category</span>
          <select className="input border-slate-700" name="category" required>
            <option className='bg-slate-900' value="1">Doge</option>
            <option className='bg-slate-900' value="2">Ok</option>
            <option className='bg-slate-900' value="3">Bruh</option>
          </select>
        </label>

        <button
          //onClick={() => setVisibleModal(true)}
          className="mt-2 flex max-w-fit items-center gap-2 text-white/50 hover:text-white"
        >
          <FaPlus />
          <span>Manage Categories</span>
        </button>

        {/* Radio Buttons */}
        <div className="flex items-center gap-4">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="type"
              value={'income'}
              className="form-radio text-blue-600"
            />
            <span>Income</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="type"
              value={'expense'}
              className="form-radio text-blue-600"
            />
            <span>Expense</span>
          </label>
        </div>

        {/* Submit Button */}
        <button className="btn btn-green max-w-fit mt-2">
          Submit
        </button>
      </Form>
    </div>
  )
}

export default TransactionForm
