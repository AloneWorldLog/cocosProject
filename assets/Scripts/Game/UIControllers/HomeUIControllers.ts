import { _decorator, Component, Event, log, Node } from 'cc';
import EventManager from '../../Framework/EventManager';

export class HomeUIControllers extends Component {
   
    Init(){
        this.node.on(Node.EventType.MOUSE_DOWN,this.onGameStart,this)
    }

    onGameStart(){
        log('game start')
        EventManager.Instance.Emit('testEvent')
    }
}




