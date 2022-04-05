export interface UserItem {
    type: PaymentType
    _id: string
    amount: number
    name: Name
    company: string
    email: string
    phone: string
    address: string
}

export interface Name {
    first: string
    last: string
}

export type PaymentType = 'income' | 'outcome' | 'loan' | 'investment' | string
