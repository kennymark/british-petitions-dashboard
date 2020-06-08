import { AllPetitions } from "./all-petition.model";
import { SinglePetition } from "./single-petition.model";
import { Action } from "easy-peasy";






export interface PetitionModel {
  allPetitions: AllPetitions[] | Array<any>;
  currentPetition: SinglePetition | Array<any>;
  setAllPetitions: Action<PetitionModel, AllPetitions[]>;
  setCurrentPetition: Action<PetitionModel, SinglePetition>
}