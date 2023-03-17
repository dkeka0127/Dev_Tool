export interface UserData {
  memberIdx: number;
  logKey: string;
  userID: string;
  userName: string;
  userEmail: string;
  autoLogin?: boolean;
}

export interface Ticket {
  ticketName: string;
  ticketDay: number;
  remainDay: number;
  ticketStartDate: string;
  ticketEndDate: string;
  ticketStatus: string;
  ticketRegDatetime: string;
  ticketDescription: string;
}

export interface Order {
  productName: string;
  orderNo: string;
  payType: string;
  payMethod: string;
  paymentAmount: number;
  paymentDatetime: string;
  refundAmount: number;
  refundDatetime: string;
}
