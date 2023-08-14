import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {time: 25, sec: '00', ans: 60, head: 1, initial: false}

  PlayIcon = () => {
    this.setState(prevState => ({
      initial: !prevState.initial,
    }))
    if (!this.timerId) {
      this.timerId = setInterval(this.PlayIcon1, 1000)
      console.log(this.timerId)
    }
  }

  PlayIcon1 = () => {
    const {sec, head, initial} = this.state

    if (initial === true) {
      if (head === 1) {
        this.setState(prevState => ({
          sec: prevState.ans - 1,
          head: prevState.head + 1,
          time: prevState.time - 1,
        }))
      } else if (parseInt(sec) === 1) {
        this.setState(prevState => ({
          sec: (parseInt(prevState.sec) - 1).toString() + 0,
          head: 1,
        }))
      } else if (sec > 1 && sec < 11) {
        this.setState(prevState => ({
          sec: 0 + (prevState.sec - 1).toString(),
          head: prevState.head + 1,
        }))
      } else if (sec > 10) {
        this.setState(prevState => ({
          sec: prevState.sec - 1,
          head: prevState.head + 1,
        }))
      }
    }
  }

  Reset = () => {
    this.setState({
      initial: false,
      time: 25,
      sec: '00',
      head: 1,
    })
  }

  onclickPlus = () => {
    const {time, initial} = this.state

    if (initial === false) {
      if (time > 0) {
        this.setState(prevState => ({
          time: parseInt(prevState.time) + 1,
        }))
      }
    }
  }

  onclickMinus = () => {
    const {time} = this.state
    if (time > 0) {
      this.setState(prevState => ({
        time: parseInt(prevState.time) - 1,
      }))
    }
  }

  render() {
    const {time, sec, initial} = this.state

    return (
      <div className="container">
        <h1 className="head">Digital Timer</h1>
        <div className="bothContainer">
          <div className="backGroundContainer">
            <div className="insideBackGroundImage">
              <h1 className="heading">
                {time}:{sec}
              </h1>
              <p className="Description">{initial ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div>
            <div className="pauseContainer">
              {initial ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png "
                  alt="pause icon"
                  className="image"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png "
                  alt="play icon"
                  className="image"
                />
              )}
              <button
                className="Description1"
                type="button"
                onClick={this.PlayIcon}
              >
                <p>{initial ? 'Pause' : 'start'}</p>
              </button>

              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                alt="reset icon"
                className="image"
              />

              <button
                className="Description1"
                type="button"
                onClick={this.Reset}
              >
                Reset
              </button>
            </div>
            <div className="lastContainer">
              <p className="head1">Set Timer limit</p>
              <div className="tharun">
                <button
                  type="button"
                  className="button"
                  onClick={this.onclickMinus}
                >
                  -
                </button>
                <p className="button1">25</p>
                <button
                  type="button"
                  className="button"
                  onClick={this.onclickPlus}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
