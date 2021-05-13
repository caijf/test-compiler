declare class Counter {
    ref: WeakRef<HTMLElement> | null;
    timer: any;
    count?: number;
    constructor(element: HTMLElement | null);
    start(): void;
    stop(): void;
}
declare const counter: Counter;
