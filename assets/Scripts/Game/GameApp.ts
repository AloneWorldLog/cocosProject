import { _decorator, Component, find, instantiate, log, Node, Prefab, v3 } from 'cc';
import Singleton from '../Base/Singleton';
import { ResourcesManager } from '../Framework/ResourcesManager';
import { HomeUIController } from './UIControllers/HomeUIController';
import EventManager from '../Framework/EventManager';

export class GameApp extends Singleton {

    static get Instance() {
        return super.GetInstance<GameApp>();
      }

    Init() {

    }

    async EnterGame() {
        //启动
        log('Enter Game')

        //加载
        // let prefab = await ResourcesManager.Instance.loadRes('GUI/sword', Prefab);
        // let node = instantiate(prefab) as Node;
        // node.setParent(find('Canvas'));

        //home页面
        await this.EnterHome();

        find('Canvas/BootLoader').destroy();

    }

    async EnterHome() {
        let prefab = await ResourcesManager.Instance.loadRes('GUI/sword', Prefab);
        let node = instantiate(prefab) as Node;
        node.setParent(find('Canvas'));
        node.addComponent(HomeUIController).Init();

        EventManager.Instance.On('testEvent', this.testEvent)

    }

    testEvent(params:unknown[]) {
        log('test')
        log(params)
    }

}


