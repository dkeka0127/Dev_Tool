export type bannerPositionType = 'Main' | 'MyPage';
export type BannerLinkOpenType = '_blank' | '_self';
export type BannerType = 'FILE' | 'URL';
export interface BannerData {
  title: string;
  alt: string;
  ord_no: string;
  bnr_content: string;
  link_url: string;
  bg_color?: string;
}

export type LectureStatusType = 'wait' | 'ing' | 'complete';
export interface LectureData {
  lectureNID: number;
  lectureName: string;
  videoFileName: string;
  videoPlayLengthSEC: number;
  thumbnailFileName: string;
  grammarImageFileName: string;
  totalVideoPlayLengthSEC: number;
  lastVideoPlayTimeSEC: number;
  lecturePercentage: number;
  lectureStatus: LectureStatusType;
}

export type ExampleCorrectAnswerType = 'A' | 'B';
export interface QuestionData {
  lectureNID: number;
  excerciseQuestionNID: number;
  textbody: string;
  question: string;
  questionSpeechFileName: string;
  questionMeaning: string;
  exampleA: string;
  exampleB: string;
  exampleCorrectAnswer: ExampleCorrectAnswerType;
  solution: string;
}

export interface VocabularyData {
  lectureNID: number;
  vocabularyNID: number;
  vocabulary: string;
  vocabularySpeechFileName: string;
  vocabulary01PartsOfSpeech: string;
  vocabulary01Meaning: string;
  vocabulary02PartsOfSpeech: string | null;
  vocabulary02Meaning: string | null;
}

export interface TodayVocabularyData {
  lectureNID: number;
  vocabularyNID: number;
  vocabulary: string;
  vocabularySpeechFileName: string;
  vocabulary01PartsOfSpeech: string;
  vocabulary01Meaning: string;
  vocabulary02PartsOfSpeech: string | null;
  vocabulary02Meaning: string | null;
}

// ==============================================================================

export interface VocaMeaningData {
  PartOfSpeech: string;
  Meaning: string;
  MeaningEtymology?: string;
  MeaningFile?: string;
}

export interface VocaDerivativeData {
  Derivative: string;
  DerivativeFile: string;
  DerivativeImportance: string;
  DerivativeInfo: {
    DerivativePartOfSpeech: string;
    DerivativeMeaning: string;
    DerivativeMeaningFile: string;
  }[];
}

export interface VocaExampleData {
  Example: string;
  ExampleFile: string;
  IsExamQuestion: number;
  ExampleMeaning: string;
  ExampleMeaningFile: string;
}

export interface EtymologyChainData {
  Voca: string;
  VocaMeaning: VocaMeaningData[];
  Etymology: string;
  EtymologyInfo: string;
}

export interface EtymologyInfoData {
  EtymologyInfo: string;
  EtymologyInfoImage: string;
  EtymologyDetail: {
    IsEmphasis: number;
    Etymology: string;
    EtymologyMeaning: string;
  }[];
}

export interface EtymVocabularyData {
  vocaIdx: number;
  vocabulary: string;
  orderValue: number;
  emphasisEtymology: string;
  importance?: string;
  past?: string;
  pastParticle?: string;
  pronounciation?: {Phonetic: string; PhoneticFile: string}[];
  meaning: string;
  derivative?: VocaDerivativeData[];
  example?: VocaExampleData[];
  keyExpression?: {
    KeyExpressionExample: string;
    KeyExpressionMeaning: string;
  }[];
  etymologyChainTitle: string;
  isEtymologyChainGroup: number;
  etymologyChain: {
    Single: EtymologyChainData[];
    Group: EtymologyChainData[];
  } | null;
  etymologyInfo?: EtymologyInfoData | null;
  isBookmark?: number | string;
  learnDatetime: string | null;
  gameDatetime: string | null;
  lastViewDatetime: string | null;
}

export interface KeyEtymologyData {
  day: number;
  dayIdx: number;
  isTransform: number | string;
  keyEtymology: string;
  keyEtymologyIdx: number;
  meaning: Array<string>;
  subject: string;
  transformInfo: string;
  vocabulary: EtymVocabularyData[];
  etymologyChainTitle: string;
  etymologyChain: Object;
}
