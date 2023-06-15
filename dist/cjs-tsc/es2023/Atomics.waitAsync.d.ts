declare const sab: SharedArrayBuffer;
declare const int32: Int32Array;
declare const result: {
    async: false;
    value: "not-equal" | "timed-out";
} | {
    async: true;
    value: Promise<"timed-out" | "ok">;
};
