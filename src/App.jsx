import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import InputBox from './components/InputBox'
import './App.css'

function App() {

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const [convertedAmount, setConvertedAmount] = useState(0)
    const Currencyinfo = useCurrencyInfo(from)

    const options = Object.keys(Currencyinfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setAmount(convertedAmount)
        setConvertedAmount(amount)
    }

    const convert = () => {
        setConvertedAmount(amount * Currencyinfo[to])
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://imgs.search.brave.com/QP_HMnHANnvKfVgYZ1Rpc1Pvp97VNTV4VGGlX5kLtMY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODc1/MDc0MTE2L3Bob3Rv/L2JhY2tncm91bmQt/c3RvY2stbWFya2V0/LWFuZC1maW5hbmNl/LWVjb25vbWljLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1t/TDRDZVhkeWI1SFJn/ZXFXeW9HdW5fZEZy/bDZ4elR6TS15WHRr/c0RWeXNBPQ')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyoptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyoptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
