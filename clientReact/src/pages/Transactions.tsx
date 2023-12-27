import { FC } from 'react'
  
import TransactionForm from '../components/TransactionForm'
import { instance } from '../api/axios.api' 
import { ICategory, ITransaction } from '../types/types'
import { toast } from 'react-toastify'
import TransactionTable from '../components/TransactionTable'

export const transactionAction = async ({ request }: any) => { 
  switch (request.method) {
    case "POST": {
      const formData = await request.formData()
      const newTransaction = {
        title: formData.get("title"),
        amount: +formData.get("amount"),
        category: formData.get("category"),
        type: formData.get("type"),
      }

      await instance.post('/transactions', newTransaction)
      toast.success('Transaction added.')

      return null
    }
    case "DELETE": {
      const formData = await request.formData()
      const transactionId = formData.get('id')
      await instance.delete(`/transactions/transaction/${transactionId}`)
      toast.success('Transaction deleted.')
      return null
    }
  }

}

export const transactionLoader = async () => { 
  const categories = await instance.get<ICategory[]>('/categories')
  const transactions = await instance.get<ITransaction[]>('/transactions')

  const data = { 
    categories: categories.data,
    transactions: transactions.data
  }

  return data 
}

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
      <h1 className="my-5">
        <TransactionTable limit={5} />
      </h1>
    </>
  )
}

export default Transactions