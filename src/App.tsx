import React from 'react'
import './App.scss'
import filters, { filterItem } from './constants/filters';
import initialValue, { colorItem } from './constants/initialValue';
import { isValidColor } from './helpers/color';
import { getItem, setItem } from './helpers/localstorage';
class App extends React.Component {

  state = {
    color: []
  }

  componentDidMount = () => {
    this.setInitialValue()
  }

  // set initial value of app
  setInitialValue = () => {
    const currentValue: Array<colorItem> = getItem('color')
    if (currentValue.length <= 0) {
      setItem('color', initialValue)
      this.setState({ color: initialValue })
    } else {
      this.setState({ color: currentValue })
    }
  }

  // set background color of box item block
  setColor = (index: number, value: string) => {
    setTimeout(() => {
      const block: HTMLElement = document.getElementsByClassName('box-item-block')[index] as HTMLElement
      block.style.background = value
    }, 500)
  }

  // handle on submit form
  handleOnSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    let temp: Array<colorItem> = [...this.state.color]
    const input: HTMLInputElement = event.currentTarget.elements[0] as HTMLInputElement
    if (isValidColor(input.value)) {
      temp.push({ value: input.value, removable: true })
      setItem('color', temp)
      event.currentTarget.reset()
      this.setState({ color: temp })
    } else {
      alert('color format must be HEX or RGB')
    }
  }

  // handle on remove color
  handleOnRemove = (index: number) => {
    let temp: Array<colorItem> = [...this.state.color]
    temp.splice(index, 1)
    setItem('color', temp)
    this.setState({ color: temp })
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper-form-add">
          <form onSubmit={this.handleOnSubmit}>
            <div className="wrapper-label">Add new color: </div>
            <div className="wrapper-input"><input /></div>
            <div className="wrapper-button"><button>Add</button></div>
          </form>
        </div>
        <div className="wrapper-filter">
          <form>
            {filters.map((item: filterItem, key: number) => (
              <div className="wrapper-filter-item" key={key}>
                <label><input type="checkbox" onChange={() => { }} /> {item.label}</label>
              </div>
            ))}
          </form>
        </div>
        <div className="wrapper-box">
          {this.state.color.map((item: colorItem, key: number) => {
            this.setColor(key, item.value);
            return (
              <div className="box-item" key={key}>
                <div className="box-item-block" />
                <div className="box-item-detail">
                  <div className="box-item-detail-color">{item.value}</div>
                  {item.removable && (
                    <div className="box-item-detail-close" onClick={() => this.handleOnRemove(key)}>x</div>
                  )}
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>
    )
  }
}

export default App;
