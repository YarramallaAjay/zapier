export interface Zap {
    "id": string,
    "triggerId": string,
    "userId": number,
    "actions": Action[],
    "trigger": Trigger
}


interface Action
{
    "id": string,
        "zapId": string,
        "actionId": string,
        "sortingOrder": number,
        "type": {
            "id": string,
            "name": string
            "image": string
        }
}

interface Trigger {
    "id": string,
        "zapId": string,
        "triggerId": string,
        "type": {
            "id": string,
            "name": string,
            "image": string
        }
}
