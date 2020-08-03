import BaseViewModel from './BaseViewModel'

import StoryCache from '../../cache/StoryCache'

class HomeState {
    storyList = []
}

export default class HomeViewModel extends BaseViewModel {
    defaultState() {
        return new HomeState()
    }

    // QUESTION: Should new state do the set state call, or allow for processing?
    start() {        
        const newState = this.newState({
            storyList: StoryCache.getStoryList()
        }) 
        
        this.setState(newState)
    }
}