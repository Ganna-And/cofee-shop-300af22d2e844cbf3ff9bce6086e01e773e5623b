export type ChooseLanguage={
    languageData: any
}

export type LanguageData={
    header: Header,
    intro: Intro
}

/* header component */
export type Header={
    langNav:[LangItem],
    contacts: string,
    mainNav:[NavItem]
}

export type LangItem={
    id: string
}

export type NavItem={
    title: string
}

/* intro component */

export type Intro ={
    imgSrc: string,
    title: string,
    bittons: [Button]
}

export type Button ={
    text: string
}

export type CoffeeSize = {
  id: string;  
  size: string;
    price: string;
    discount: string;
  };
  
  export type CoffeeProduct = {
    id: number;
    title: string;
    btn_txt: string;
    description: string;
    sizes: CoffeeSize[]; // Array of different sizes and prices
    imgSrc: string;
  };
  
  export type CoffeeProductData = {
    products: CoffeeProduct[];
  };
  
  export type NewsProductData = {
    title: string,
    newsItems: NewsItem[]
  }

  export type NewsItem ={
    title: string;
    description: string,
    imgSrc: string
  }