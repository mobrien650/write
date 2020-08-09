import BaseViewModel from 'pages/logic/BaseViewModel'
import Tracker from 'pages/tracking/AnalyticsTracker'

import StoryCache from 'cache/StoryCache'
import BlogCache from 'cache/BlogCache'

import { TEXT_TYPE } from 'pages/logic/DrawerViewModel'

class StoryState {
    story = null
}

export default class HomeViewModel extends BaseViewModel {

    defaultState() {
        return new StoryState()
    }

    getMediaName() {
        return this.props.match.params.name
    }

    getType() {
        return this.props.match.params.type
    }

    onPropChange() {
        this.loadStory()
    }

    start() {      
        this.tracker = new Tracker()

        this.loadStory()
    }

    getFetchPromise() {
        const type = this.getType()

        if(type === TEXT_TYPE.STORY) {
            return StoryCache.fetchStory(this.getMediaName())
        } else if(type === TEXT_TYPE.BLOG) {
            return BlogCache.fetchBlog(this.getMediaName())
        } else {
            return new Promise((resolve) => { resolve(`Could not find ${this.getType()}`) })
        }
    }

    loadStory() {
        this.tracker.visitPage()
        this.tracker.startStory(this.getMediaName())

        this.getFetchPromise().then(story => {
            const newState = this.newState({
                story
            })
            
            this.setState(newState)
        })  
    }
}