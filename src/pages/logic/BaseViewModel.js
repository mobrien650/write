export default class BaseViewModel {
    constructor(props, update) {
        this.update = update;
        this.props = props;
        this.state = this.defaultState()
    }

    setState(state) {
        this.state = Object.freeze(state)
        this.update(this.state)
    }

    defaultState() {
        return { }
    }

    newState(stateDelta) {
        return {
            ...this.state,
            ...stateDelta
        }
    }

    start() {

    }
}