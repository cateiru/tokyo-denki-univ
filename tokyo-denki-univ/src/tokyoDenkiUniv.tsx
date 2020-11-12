import React from 'react';
import {TwitterShareButton, TwitterIcon} from 'react-share'
import './tdu.css'
import refresh from './Refresh.svg'

interface State {
    shuffleValue: string
    display: string
}

export class TokyoDenkiUniv extends React.Component<{}, State> {
    constructor(props: {}){
        super(props)

        this.reload = this.reload.bind(this)
        this.createString = this.createString.bind(this)
        this.changeValue = this.changeValue.bind(this)

        this.state = {
            display: this.createString('東京電機大学'.split('')),
            shuffleValue: '東京電機大学',
        }
    }

    changeValue(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState(state => ({
            shuffleValue: event.target.value,
            display: this.createString(event.target.value.split(''))
        }))
    }

    createString(value: string[]): string {
        const shuffled = []

        for(let i = 0; value.length > i; ++i){
            shuffled.push(value[Math.floor(Math.random() * (value.length))])
        }

        return shuffled.join('')
    }

    reload() {
        this.setState(state => ({
            display: this.createString(state.shuffleValue.split(''))
        }))
    }

    render() {
        return (
            <div className="tdu">
                <div className="shuffleValue">
                    <input className="inputValue" type="text" value={this.state.shuffleValue} onChange={this.changeValue} />
                </div>
                <div className="reload">
                    <button onClick={this.reload}>
                        <img src={refresh} alt="refresh" />
                    </button>
                </div>
                <div className="display">
                    {this.state.display}
                </div>
                <div className="share">
                    <TwitterShareButton url={`${window.location.href}\n`} title={`${this.state.shuffleValue}\n↓\n${this.state.display}\n\n`} hashtags={["TDUメーカー"]}>
                        <TwitterIcon round={true} />
                    </TwitterShareButton>
                </div>
            </div>
        )
    }
}
