import BaseViewModel from './BaseViewModel'

import StoryCache from '../../cache/StoryCache'

class StoryState {
    story = null
}

export default class HomeViewModel extends BaseViewModel {
    defaultState() {
        return new StoryState()
    }

    getStoryName() {
        return this.props.match.params.name
    }

    start() {      
        StoryCache.fetchStory(this.getStoryName())
            .then(story => {
                const newState = this.newState({
                    story
                })
                
                this.setState(newState)
            })  
    }
}