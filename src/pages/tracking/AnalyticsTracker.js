import Tracker, { CATEGORIES, DIMENSION } from './GATracker'

export default class AnalyticsTracker {
    
    visitPage() {
        Tracker.trackPage()
    }

    startStory(name) {
        Tracker.sendEvent(CATEGORIES.StartStory, `Started story: ${name}`, true)
    }
}