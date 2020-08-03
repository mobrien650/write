import { Component } from 'react'

export default class BasePage extends Component {
    constructor(props, viewModelClass) {
        super(props)
        this.viewModel = new viewModelClass(props, this.update);
        this.state = this.viewModel.state
    }

    update = (state) => {
        this.setState(state)
    } 

    componentDidMount() {
        this.viewModel.start()
    }
    
    render() {
        return null
    }
}