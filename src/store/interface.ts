// 所有模块state管理
import RouteRecordTypes from "./moudels/route-record/interface";

export interface RootStateTypes {}

export default interface AllStateTypes extends RootStateTypes {
  routeRecord: RouteRecordTypes
}
