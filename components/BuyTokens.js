import React from 'react'

const styles={
    inputAmount: "w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-trasparent mt-6 text-white placeholder:text-white",
    formContainer: "flex items-center",
    select: "w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-trasparent mt-6 text-white placeholder:text-white",
    options: "w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white",
}


const BuyTokens = () => {
  return (
    <form className={styles.formContainer}>
        <div className="flex h-full w-full flex-col items-center">
            <select className={styles.select}>
                <option className={styles.options} >
                    ETH
                </option>
                <option className={styles.options} >
                    BTC
                </option>
                <option className={styles.options} >
                    SOL
                </option>
                <option className={styles.options} >
                    USDC
                </option>                
            </select>

            <input placeholder="Amount..." className={styles.inputAmount} type="text"/>
            <button className={styles.noticeCTA} type="submit" /*onClick={() => mint()}*/>Send</button>

        </div>
    </form>
  )
}

export default BuyTokens