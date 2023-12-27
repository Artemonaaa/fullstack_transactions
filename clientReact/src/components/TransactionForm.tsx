import { FC, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'

import { IResponseTransactionLoader } from '../types/types'
import CategoryModal from './CategoryModal'

const TransactionForm: FC = () => {
  const { categories } = useLoaderData() as IResponseTransactionLoader

  const [visibleModal, setVisibleModal] = useState(false)

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
        {categories.length ? (
          <label className="grid">
            <span>Category</span>
            <select className="input border-slate-700" name="category" required>
              {categories.map((ctg, idx) => (
                <option className="bg-slate-900" value={ctg.id} key={idx}>
                  {ctg.title}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <h1 className="mt-1 text-red-300">To continue create a categorie first</h1>
        )}

        <button
          onClick={() => setVisibleModal(true)}
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
        <button className="btn btn-green mt-2 max-w-fit">Submit</button>
      </Form>

      { /* Add category modal */ }
      {visibleModal && (
        <CategoryModal type="post" setVisibleModal={setVisibleModal} />
      )}
    </div>
  )
}

export default TransactionForm
