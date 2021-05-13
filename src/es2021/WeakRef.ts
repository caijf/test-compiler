class Counter {
  ref: WeakRef<HTMLElement> | null;
  timer: any;
  count?: number;

  constructor(element: HTMLElement | null) {
    // Remember a weak reference to the DOM element
    this.ref = new WeakRef(element as HTMLElement);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () => {
      // Get the element from the weak reference, if it still exists
      const element = this.ref?.deref();
      if (element) {
        element.textContent = ++(this.count as number) + '';
      } else {
        // The element doesn't exist anymore
        console.log("The element is gone.");
        this.stop();
        this.ref = null;
      }
    };

    tick();
    this.timer = setInterval(tick, 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}

const counter = new Counter(document.getElementById("counter"));
counter.start();
setTimeout(() => {
  document.getElementById("counter")?.remove();
}, 5000);