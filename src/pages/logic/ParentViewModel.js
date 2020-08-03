import BaseViewModel from 'pages/logic/BaseViewModel'

import StoryCache from 'cache/StoryCache'

class ParentState {
    storyList = []
}

export default class ParentViewModel extends BaseViewModel {
    defaultState() {
        return new ParentState()
    }

    start() {        
        const newState = this.newState({
            storyList: StoryCache.getStoryList()
        }) 
        
        this.setState(newState)
    }
}