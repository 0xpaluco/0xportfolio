const metrics = [
    { id: 1, stat: 'Ownership', emphasis: 'Your data', rest: 'lives on the blockchain. You own it. You decide what to do with it.' },
    { id: 2, stat: 'Censorship Resistance', emphasis: 'Do not let', rest: 'platforms lock you out of your entire online life.' },
    { id: 3, stat: 'DAOs', emphasis: 'Own the platform', rest: 'as a collective. And make decisions about its future.' },
    { id: 4, stat: 'Identity', emphasis: 'Control your digital identity', rest: 'with an Ethereum address and ENS profile.' },
  ]
  
  export default function Metrics() {
    return (
      <div className="relative bg-c-bg">
        <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-c-bg xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-sm font-semibold text-c-l-primary tracking-wide uppercase">Why Web3?</h2>
            <p className="mt-3 text-3xl font-extrabold text-white">
              Web3 is an evolving ecosystem. 
            </p>
            <p className="mt-5 text-lg text-gray-300">
              We are only at the beginning, and the future of the Web looks bright.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className="block text-2xl font-bold text-c-primary">{item.stat}</span>
                  <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }