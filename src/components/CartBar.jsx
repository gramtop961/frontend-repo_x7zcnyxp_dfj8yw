import { Minus, Plus, Trash2 } from 'lucide-react'

export default function CartBar({ items, onIncrement, onDecrement, onRemove }) {
  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0)
  const count = items.reduce((sum, it) => sum + it.quantity, 0)

  return (
    <div className="sticky bottom-4 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border shadow-lg bg-white overflow-hidden">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-baseline gap-3">
              <p className="text-sm text-gray-600">Items</p>
              <p className="font-semibold">{count}</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-lg font-bold">${total.toLocaleString()}</p>
              <button className="ml-2 inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700">
                Checkout
              </button>
            </div>
          </div>

          {items.length > 0 && (
            <div className="border-t divide-y max-h-64 overflow-auto">
              {items.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover border" />
                    <div className="min-w-0">
                      <p className="font-medium truncate">{item.name}</p>
                      <p className="text-sm text-gray-600">${item.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => onDecrement(item.id)} className="p-1 rounded border hover:bg-gray-50" aria-label="Decrease">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button onClick={() => onIncrement(item.id)} className="p-1 rounded border hover:bg-gray-50" aria-label="Increase">
                      <Plus className="w-4 h-4" />
                    </button>
                    <button onClick={() => onRemove(item.id)} className="ml-2 p-1.5 rounded border text-red-600 hover:bg-red-50" aria-label="Remove">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {items.length === 0 && (
            <div className="px-4 pb-4 -mt-2 text-sm text-gray-600">Your cart is empty. Add some phones you love!</div>
          )}
        </div>
      </div>
    </div>
  )
}
