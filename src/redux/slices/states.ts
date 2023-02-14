import { IScoreState, IMoneyState } from "../types";

const initialStateScore: IScoreState = {
  startScore: 0,
};

const initialMoneyState: IMoneyState = {
  startMoney: 0,
  oneClickAddAmount: 1
};

const initialShopState = {
  singleClickUpgrade: 1000, 
}


export { initialStateScore, initialMoneyState as initialMoneyAmount, initialShopState };
