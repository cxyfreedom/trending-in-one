export type ZhihuVideoItem = {
  target: {
    title_area: {
      text: string;
    };
    link: {
      url: string;
    };
  };
};

export type Question = {
  title: string;
  url: string;
};

export type ZhihuVideoList = {
  data: ZhihuVideoItem[];
};

export type ZhihuQuestionItem = {
  target: {
    title: string;
    id: number;
  };
};

export type ZhihuQuestionList = {
  data: ZhihuQuestionItem[];
};

export type SearchWord = {
  query_display: string;
  real_query: string;
};

export type TopSearch = {
  recommend_queries: {
    queries: SearchWord[];
  };
};

export type Word = {
  title: string;
  url: string;
  realurl?: string;
};

export type ToutiaoTopSearch = {
  data: [
    {
      words: ToutiaoWord[];
    },
  ];
};

export type ToutiaoWord = {
  word: string;
  url: string;
};
