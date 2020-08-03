import Tracker, { CATEGORIES, DIMENSION } from './GATracker'

export default class HomeTracker extends BaseTracker {
    
    start = null

    visitPage() {
        Tracker.trackPage()

        this.start = new Date().getTime()
    }

    completePage(action) {
        const now = new Date().getTime()

        let time = null
        if(start != null) {
            time = now - this.start
        }

        Tracker.sendEvent(CATEGORIES.PageViewComplete, action, true, { [DIMENSION.TimeOnPage]: time })
    }
}