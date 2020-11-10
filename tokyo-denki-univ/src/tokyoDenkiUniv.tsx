import React from 'react';
import {TwitterShareButton} from 'react-share'

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
            display: '',
            shuffleValue: '東京電機大学',
        }
    }

    changeValue(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState(state => ({
            shuffleValue: event.target.value
        }))
    }

    createString(): string {
        const value = this.state.shuffleValue.split('')

        const shuffled = []

        for(let i = 0; value.length > i; ++i){
            shuffled.push(value[Math.floor(Math.random() * (value.length))])
        }

        return shuffled.join('')
    }

    reload() {
        this.setState(state => ({
            display: this.createString()
        }))
    }

    render() {
        return (
            <div>
                <div className="shuffleValue">
                    <input type="text" value={this.state.shuffleValue} onChange={this.changeValue} />
                </div>
                <div className="display">
                    {this.state.display}
                </div>
                <div className="reload">
                    <button onClick={this.reload}>
                        リロード
                    </button>
                </div>
                <div className="share">
                    <TwitterShareButton url={window.location.href} title={`${this.state.display}\n\n`} via="cateiru">
                        ツイート
                    </TwitterShareButton>
                </div>
            </div>
        )
    }
}
