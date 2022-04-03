import {BiDotsHorizontalRounded} from 'react-icons/bi';
import {AiOutlinePlus} from "react-icons/ai"

const styles = {
  wrapper: "w-screen h-screen flex flex-col"
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      { /*<Header /> */}
      <div className={styles.mainContainer}>
        <div className={styles.portfolioAmountContainer}>
          <div className={styles.portfolioAmount}>23 ETH</div>
          <div className={styles.portfolioPercent}>
            +0.0008 (+0.57%)
            <span className={styles.pastHour}>Past Hour</span>
          </div>
        </div>
        <div>
          <div className={styles.chartContainer}>
            { /*<PortfolioChart/> */}
          </div>
        </div>
        <div className={styles.buyingPowerContainer}>
          <div className={styles.buyingPowerTitle}>
            Buying Power
          </div>
          <div className={styles.buyingPowerAmount}>12 ETH</div>
        </div>
        <div className={styles.notice}>
          <div className={styles.noticeContainer}>
            <div className={styles.noticeTitle}>Send Funds</div>
            <div className={styles.noticeMessage}>
              Transfer your funds here.
            </div>
            {/* <BuyTokens /> */}
          </div>
        </div>
        {/* <Notice /> */}
      </div>
      <div className={styles.rightMain}>
        <div className={styles.rightMainItem}>
          <div className={styles.ItemTitle}>Crypto Currency</div>
        </div>
      </div>
    </div>
  )
}
