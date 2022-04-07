import React from 'react';
import {TwitterShareButton, TwitterIcon} from 'react-share'
import './tdu.css'
import refresh from './Refresh.svg'

const Maker = () => {
  const [value, setValue] = React.useState("東京電機大学");
  const [shuffled, setShuffled] = React.useState("");

  React.useEffect(() => {
    setShuffled(generate(value))
  }, [])

  const reload = () => {
    setShuffled(generate(value));
  }

  const generate = (target: string) => {
    const v = []

    if(target === '東京電機大学') {
      const ssr = Math.floor(Math.random() * 60)

      // 3/60 = 5% の確率で変な文字を出す
      switch(ssr) {
        case 0:
          return "東京大学"
        case 1:
          return "東京電気大学"
        case 2:
          return "東京ヲタク大学"
      }
    }

    for(let i = 0; target.length > i; ++i){
        v.push(target[Math.floor(Math.random() * (target.length))])
    }

    return v.join('')
  }

  return (
    <div className="tdu">
        <div className="shuffleValue">
            <input className="inputValue" type="text" value={value} onChange={(e) => {
              setValue(e.target.value);
            }} />
        </div>
        <div className="reload">
            <button onClick={reload}>
                <img src={refresh} alt="refresh" />
            </button>
        </div>
        <div className="display">
            {shuffled}
        </div>
        <div className="share">
            <TwitterShareButton url={`${window.location.href}\n`} title={`${value}\n↓\n${shuffled}\n\n`} hashtags={["TDUメーカー"]}>
                <TwitterIcon round={true} />
            </TwitterShareButton>
        </div>
    </div>
  )
}

export default Maker;
