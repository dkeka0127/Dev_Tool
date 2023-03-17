import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SettingGameState {
  isSound: boolean | string;
  isVibrate: boolean | string;
  limitTime: number | string;
  numberOfQuestions: number | string;

  isSoundF: (isSound: boolean | string) => void;
  isVibrateF: (isVibrate: boolean | string) => void;
  limitTimeF: (limitTime: any) => void;
  numberOfQuestionsF: (numberOfQuestions: any) => void;
}

export const SettingGameTimeoutValues = [
  {idx: 1, title: '10초', value: 10},
  {idx: 2, title: '15초', value: 15},
  {idx: 3, title: '30초', value: 30},
];

export const SettingGameQuestionCountValues = [
  {idx: 1, title: '10개', value: 10},
  {idx: 2, title: '20개', value: 20},
  {idx: 3, title: '30개', value: 30},
  {idx: 4, title: '50개', value: 50},
];

export const useSettingGame = create<SettingGameState>(set => ({
  isSound: true,
  isVibrate: true,
  limitTime: 15,
  numberOfQuestions: 20,

  isSoundF(isSound) {
    AsyncStorage.setItem('GameSound', isSound.toString());
    set(() => ({isSound: !isSound}));
  },
  isVibrateF(isVibrate) {
    AsyncStorage.setItem('GameVibrate', isVibrate.toString());
    set(() => ({isVibrate: !isVibrate}));
  },
  limitTimeF(limitTime) {
    AsyncStorage.setItem('GameLimitTime', limitTime.toString());
    set(() => ({limitTime: limitTime}));
  },
  numberOfQuestionsF(numberOfQuestions) {
    AsyncStorage.setItem('GameNumberOfQuestions', numberOfQuestions.toString());
    set(() => ({numberOfQuestions: numberOfQuestions}));
  },
}));

// Usage

// import {} from '';

// const {isSound, isSoundChange} = useGameStore();

// onPress={() => isSoundChange()}
// onPress={() => limitTimeChange(15)}
