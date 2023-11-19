import { FC } from 'react'
  
import TransactionForm from '../components/TransactionForm'

const Transactions: FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-3 items-start gap-4">
        {/* Add Transaction Form */}
        <div className="col-span-2 grid">
          <TransactionForm />
        </div>

        {/* Static Blocks */}
        <div className="rounded-md bg-slate-800 p-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="">
              <p className="text-md text-center font-bold uppercase">
                Totatl Income:
              </p>
              <p className="mt-2 rounded-sm bg-green-600 p-1 text-center">
                1000$
              </p>
            </div>
            <div className="">
              <p className="text-md text-center font-bold uppercase">
                Totatl Expense:
              </p>
              <p className="mt-2 rounded-sm bg-red-500 p-1 text-center">
                1000$
              </p>
            </div>
          </div>

          <>Chart</>
        </div>
      </div>

      {/* Transactions Table */}
      <h1 className="my-5">Table</h1>
    </>
  )
}

export default Transactions