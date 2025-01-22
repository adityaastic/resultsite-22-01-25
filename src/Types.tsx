export interface IContactForm {
  first_name: string;
  last_name: string;
  company: string;
  title: string;
  email: string;
  mobile: string;
  message: string;
}

export interface IMarket {
  id: number;
  market: string;
  open_time: string;
  close_time: string;
  result_time: string;
  market_position: number;
  time_limit: null;
  holiday: boolean;
  status: boolean;
  slug: string;
  created_at: string;
  latest_result: IResult;
  previous_result: IResult;
}

export interface IResult {
  id: number;
  market_name: string;
  bet_key: string;
  added_by: string;
  refund: boolean;
  active: boolean;
  created_at: string;
}

export interface IContactCard {
  created_at: string
  id: number
  number: number
  paragraph: string
}

export interface data {
  created_at: string
  id: number
  email: string
  first_name: string
  last_name: string
  comments: string
  phone: string
}


export interface Card {
  id:string;
  paragraph: string;
  number: string;
  heading: string;
  paragraph1: string;
  video_link: string;
  created_at: string;
  paragraph2: string;
  market: string;

}

export interface FormData {
  name: string;
  email: string;
  first_name: string;
  last_name: string;
  company: string;
  mobile: string;
  title: string;
  phone: string;
  comments: string;
 
}