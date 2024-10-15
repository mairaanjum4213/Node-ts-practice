export interface ContentItem {
    date: string;
    content: string;
    transcriptURL: string;
  }
  
  export interface DataItem {
    keywordTitle: string;
    content: ContentItem[];
  }
  
  export interface EmailParams {
    recipientEmails: string[];
    category: string;
    subCategory: string;
    data: DataItem[];
  }
  
