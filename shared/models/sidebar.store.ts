import { Action } from "easy-peasy";

export interface SideBarModel {
  isOn: boolean;
  toggleSideBar: Action<SideBarModel, boolean>
}