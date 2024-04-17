import { _decorator, Component, Node, Prefab, resources } from 'cc';
import Singleton from '../Base/Singleton';
export class ResourcesManager extends Singleton {

    static get Instance() {
        return super.GetInstance<ResourcesManager>();
    }

    Init() {

    }

    loadRes(path: string, type = Prefab) {
        return new Promise((resolve, reject) => {
            resources.load(path, type, (err, res) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(res)
            })
        })
    }
}

