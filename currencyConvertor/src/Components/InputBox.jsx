// import React, {useId} from 'react'

// function InputBox({
//  ///thes are all variables take from user
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectCurrency = "usd",
//     amountDisable = false,
//     currencyDiasble = false,
//     className = "",

// }) {
//     const amountInputId = useId()  //generate unique id 
//  return (
    

//  <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//        <div className="w-1/2">
//            <label htmlFor={amountInputId}
//             className="text-black/40 mb-2 inline-block">
//               {label}  
//          </label>
//                 <input
//                 id={amountInputId}
//                 className="outline-none w-full bg-transparent py-1.5"
//               type="number"
//               placeholder='Amount'
//               disabled={amountDisable}
//               value={amount}
//               onChange={(e) => onAmountChange(Number(e.target.value))}
//                 />

//             </div>
//             <div className="w-1/2 flex flex-wrap justify-end text-right">
//                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
//                 <select 
//                 className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
//                 value={selectCurrency}
//                 onChange={(e) => 
//                     onCurrencyChange(e.target.value)}
//                     disabled={currencyDiasble} >
            
//             {currencyOptions.map((currency) => (
//                 <option key={currency}
//                 value={currency}
//                 >
//                  {currency}   
//                 </option>
//             ))}

      
//                 </select>
                
            
//             </div>
//         </div>
//     );
// }

// export default InputBox;







//revise



import { useState, useId } from "react";
function InputBox({
    label,
    className="",
    amount,
    selectCurrrency="usd",
    onCurrrencyChange,
    onAmountChange,
    currencyOptions =[],
    amountDisable=false,
    currrencyDisable=false,

}) {

const amountInputId = useId()

 return (
 <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
       <div className="w-1/2">
           <label  htmlFor={amountInputId}
            className="text-black/40 mb-2 inline-block">
                {label}
               
         </label>
                <input
                id={amountInputId}
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => onAmountChange(Number(e.target.value))}
                disabled={amountDisable}
                 />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">

                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                value={selectCurrrency}
                onChange={(e) => onCurrrencyChange(e.target.value)}
                disabled={currrencyDisable}
                 >

                    {currencyOptions.map((currency) => 
                     <option key={currency}
                     value={currency}
                     >
                  {currency}

                 
                     </option>
                    )}
                    
                  
                
                
            

      
                </select>
                
            
            </div>
        </div>
    );
}

export default InputBox;





