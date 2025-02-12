// import { useState } from 'react'

// import InputBox from './Components/InputBox'
// import useCurrencyInfo from './hooks/useCurrencyInfo'
// import './App.css'

// function App() {
//   const [amount, setAmount] = useState()
//   const [from, setFrom] = useState("usd")
//   const [to, setTo] = useState("inr")
//   const [convertedAmount, setConvertedAmount] = useState(0)

//   const currencyInfo = useCurrencyInfo(from)

//  const options = Object.keys(currencyInfo)

//   const swap = () => {
//     setFrom(to)
//     setTo(from)
//     setConvertedAmount(amount)
//     setAmount(convertedAmount)
//   }

//   const convert = () => {
//     setConvertedAmount(amount*currencyInfo[to])
//   }


//   return (
//     <div
//         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//         style={{
//             backgroundImage: `url('https://media.warriortrading.com/2021/08/18092411/shutterstock_1927709654.jpg')`,
//         }}
//     >
//         <h1 className='text-5xl text-blue-50 font-extrabold'>Currency Convert</h1>
        
//         <div className="w-full">
//             <div className="w-full max-w-md mx-auto border border-gray-60 rounded-3xl p-5 backdrop-blur-sm bg-white/30">
//                 <form
//                     onSubmit={(e) => {
//                         e.preventDefault();
//                         convert()
                       
//                     }}
//                 >
//                     <div className="w-full mb-1">
//                         <InputBox
//                             label="From"
//                             amount={amount}
//                             currencyOptions={options}
//                             onCurrencyChange={(currency) => setAmount(amount)}
//                             selectCurrency={from}  
//                             onAmountChange={(amount) => setAmount(amount)}  
//                         />
//                     </div>
//                     <div className="relative w-full h-0.5">
//                         <button
//                             type="button"
//                             className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer"
//                             onClick={swap}
//                             >
//                             Swap
//                         </button>
//                     </div>
//                     <div className="w-full mt-1 mb-4">
//                         <InputBox
//                             label="To"
//                             amount={convertedAmount}
//                             currencyOptions={options}
//                             onCurrencyChange={(currency) => setTo(currency)}
//                             selectCurrency={to}
//                             amountDisable
//                              />
//                     </div>
//                     <button type="submit" 
//                     className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer">
//                         Convert {from.toUpperCase()} to {to.toUpperCase()}
//                     </button>
//                 </form>
//             </div>
//         </div>
        
//     </div>
    
// )
// }


// export default App






// revise






import { useState } from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App() {
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [amount, setAmount] = useState()
    const [convertedAmount, setConvertedAmount] = useState(0)

    const swap = () => {
        setFrom(to)
        setTo(from)
    }
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
        
    }

  

const currencyInfo = useCurrencyInfo(from)  // using the hooks

const options = Object.keys(currencyInfo)

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://media.warriortrading.com/2021/08/18092411/shutterstock_1927709654.jpg')`,
        }}
    >
        <h1 className='text-5xl text-blue-50 font-extrabold'>Currency Convert</h1>
        
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-3xl p-5 backdrop-blur-sm bg-white/30">
                <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                }}>
                   
                   <InputBox  
                   label="From"
                   amount={amount}
                   currencyOptions={options}
                   selectCurrrency={from}
                   onCurrrencyChange={(amount) => setAmount(amount)}
                   onAmountChange={(amount) => setAmount(amount)}

                   />
                    <div className="w-full mb-1">
                      
                    </div>
                    <div className="relative w-full h-0.5 ">
                        <button
                        type='button'
                         className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer"
                        onClick={swap}
                            >
                            Swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                        label=""
                        amount={convertedAmount}
                        currencyOptions={options}
                        selectCurrrency={to}
                        onCurrrencyChange={(currency)=> setTo(currency)}
                        amountDisable
                        />
                        
                    </div>
                    <button type="submit" 
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer">
                       Convert {from.toUpperCase()} to {to.toUpperCase()} 
                       
                    </button>
                </form>
            </div>
        </div>
        
    </div> 
    
)
}


export default App





