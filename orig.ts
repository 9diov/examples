class OriginalClassA {
  data1: string;
  data2: number;
  option1: boolean;
  option2: number;
  option3: boolean;
  newChange: NewClassC;

  constructor(data1: string, data2: number, option1: boolean, option2: number, option3: boolean = false) {
    this.data1 = data1;
    this.data2 = data2;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.newChange = new NewClassC();
  }

  doX(optionX: boolean, option4: number = 0): void {
    // old code
    // ...

    // new code
    if (this.option3) {
      this.newChange.newChangeForX(option4);
    }
  }

  doY(optionY: number, option5: string = ""): void {
    const b = new OriginalClassB();
    b.doZ(option5);
  }
}

class OriginalClassB {
  newChange: NewClassC;

  constructor() {
    this.newChange = new NewClassC();
  }

  doZ(option5: string = ""): void {
    // old code
    let x = "hahaha";

    // new code
    x = this.newChange.newChangeForY(option5);
  }

  doT(): void {
  }
}

class NewClassC {
  newChangeForX(option4: number = 0) {
    if (option4 > 0) {
      console.log("Do something new");
    } else {
      console.log("Do something crazily new");
    }
  }

  newChangeForY(x: string, option5: string = ""): string {
    if (option5 == 'blah') {
      // no longer mutate
      console.log("Mutating is fun!?!?")
      return x + option5;
    }
    return x;
  }
}
