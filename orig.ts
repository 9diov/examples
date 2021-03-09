class OriginalClassA {
  data1: string;
  data2: number;
  option1: boolean;
  option2: number;

  constructor(data1: string, data2: number, option1: boolean, option2: number) {
    this.data1 = data1;
    this.data2 = data2;
    this.option1 = option1;
    this.option2 = option2;
  }

  doX(optionX: boolean): void {
  }

  doY(optionY: number): void {
    const b = new OriginalClassB();
    b.doZ();
  }
}

class OriginalClassB {
  doZ(): void {
  }

  doT(): void {
  }
}
