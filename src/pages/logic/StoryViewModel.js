import BaseViewModel from 'pages/logic/BaseViewModel'
import Tracker from 'pages/tracking/AnalyticsTracker'

import StoryCache from 'cache/StoryCache'

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

    onPropChange() {
        this.loadStory()
    }

    start() {      
        this.tracker = new Tracker()

        this.loadStory()
    }

    loadStory() {
        this.tracker.visitPage()
        this.tracker.startStory(this.getStoryName())

        StoryCache.fetchStory(this.getStoryName())
            .then(story => {
                const newState = this.newState({
                    story
                })
                
                this.setState(newState)
            })  
    }
}