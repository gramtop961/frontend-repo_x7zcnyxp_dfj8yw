import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-700 mb-4">Festival Sale</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Latest Smartphones at Unbeatable Prices
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Shop flagship and budget phones from top brands. Fast delivery, secure checkout, and best-in-class support.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#products" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">Shop Now</a>
            <a href="#deals" className="inline-flex items-center px-5 py-2.5 rounded-lg border font-medium hover:bg-gray-50 transition">View Deals</a>
          </div>
        </div>
        <div className="h-[300px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden border bg-gradient-to-br from-indigo-50 to-white">
          <Spline scene="https://prod.spline.design/1LkiR4B-VV44e1zU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
