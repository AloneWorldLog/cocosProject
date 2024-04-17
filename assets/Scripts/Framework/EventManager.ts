import { log } from "cc";
import Singleton from "../Base/Singleton";

interface IItem {
  func: Function;
  ctx: unknown;
}

export default class EventManager extends Singleton {
  static get Instance() {
    return super.GetInstance<EventManager>();
  }

  eventDic: Map<string, Array<IItem>> = new Map();

  On(event: string, func: Function, ctx?: unknown) {
    if (this.eventDic.has(event)) {
      this.eventDic.get(event).push({ func, ctx });
    } else {
      this.eventDic.set(event, [{ func, ctx }]);
    }
  }

  Off(event: string, func?: Function) {
    if(func){
        if (this.eventDic.has(event)) {
            const index = this.eventDic.get(event).findIndex(i => func === i.func);
            index > -1 && this.eventDic.get(event).splice(index, 1);
          }
    }else{
        this.eventDic.delete(event);
    }
  }

  Emit(event: string, ...params: unknown[]) {
    if (this.eventDic.has(event)) {
      this.eventDic.get(event).forEach(({ func, ctx }) => {
        ctx ? func.apply(ctx, params) : func(params);
      });
    }
  }

  Clear() {
    this.eventDic.clear();
  }
}