class OriginalClassA {
  data1: string;
  data2: number;
  option1: boolean;
  option2: number;
  option3: boolean;

  constructor(data1: string, data2: number, option1: boolean, option2: number, option3: boolean = false) {
    this.data1 = data1;
    this.data2 = data2;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
  }

  doX(optionX: boolean, option4: number = 0): void {
    // old code
    // ...

    // new code
    if (this.option3) {
      if (option4 > 0) {
        console.log("Do something new");
      } else {
        console.log("Do something crazily new");
      }
    }
  }

  doY(optionY: number, option5: string = ""): void {
    const b = new OriginalClassB();
    b.doZ(option5);
  }
}

class OriginalClassB {
  doZ(option5: string = ""): void {
    // old code
    let x = "hahaha";

    // new code
    if (option5 == 'blah') {
      // mutate old code
      x = x + option5;
      console.log("Mutating is fun!?!?")
    }
  }

  doT(): void {
  }
}
