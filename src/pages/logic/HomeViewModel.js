import BaseViewModel from 'pages/logic/BaseViewModel'
import Tracker from 'pages/tracking/AnalyticsTracker'

class HomeState {

}

export default class HomeViewModel extends BaseViewModel {
    defaultState() {
        return new HomeState()
    }

    start() {        
        this.tracker = new AnalyticsTracker()
        this.tracker.visitPage()
    }
}