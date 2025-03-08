export type Category = {
    id: string;
    name: string;
    description: string;
    triggerSupported: boolean;
    actionSupported: boolean;
    metadata: Record<string, unknown>;
    type: 'email' | 'sms' | 'notification' | 'transaction';
}

export type emailCategory = {
    category: Category;
    inputConfig: {
        to: string;
        from: string;
        subject: string;
        body: string;
        cc: string;
        bcc: string;
        Signature: string;  
    }

}

export type transactionCategory = {
    category: Category;
    inputConfig: {
        to: string;
        from: string;
        subject: string;
        body: string;
        amount:number;
        date:Date;
    }

}