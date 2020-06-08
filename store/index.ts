import { action, createStore } from 'easy-peasy';
import { PetitionModel } from '../shared/models/petition.store';
import { SideBarModel } from '../shared/models/sidebar.store';






const sidebar: SideBarModel = {
  isOn: false,
  toggleSideBar: action((state, payload) => {
    state.isOn = !state.isOn
  })
}

const petition: PetitionModel = {
  allPetitions: null,
  currentPetition: [],

  setAllPetitions: action((state, payload) => {
    state.allPetitions = payload
  }),

  setCurrentPetition: action((state, payload) => {
    state.currentPetition = payload
  })
}

const model = { sidebar, petition }

export default createStore(model);

