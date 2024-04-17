import { _decorator, Component, director, log, Node } from 'cc';
import { GameApp } from './Game/GameApp';
import { ResourcesManager } from './Framework/ResourcesManager';
const { ccclass, property } = _decorator;

@ccclass('Boot')
export class Boot extends Component {
    protected onLoad(): void {
        director.addPersistRootNode(this.node);
         //初始化
        this.InitGameFrameWork();
    }

    InitGameFrameWork(){
        this.addComponent(ResourcesManager).Init();
       this.node.addComponent(GameApp).Init();
    }

    protected start(): void {
        GameApp.Instance.EnterGame();
    }
}


