export class SquareRootDecompositionProblem {

  private sumBlocks: Array<number>;
  private sourceArray: Array<number>;
  private sqrt: number;
  constructor(problem: Array<number>) {
    this.sqrt = Math.ceil(Math.sqrt(problem.length));
    this.sourceArray = problem;
    this.sumBlocks = new Array<number>(this.sqrt);
    this.sumBlocks.fill(0);
    while (this.sourceArray.length != this.sqrt * this.sqrt)
      this.sourceArray.push(0);
    for (let index = 0; index < problem.length; index++)
      this.sumBlocks[parseInt('' + index / this.sqrt)] += problem[index];
  }


  public rangeSum(L: number, R: number): number {
    let result = 0;
    let startBlock = this.getBlockNum(L);
    let endBlock = this.getBlockNum(R);
    if (L < 0 || R > this.sourceArray.length - 1)
      return 0;
    for (let index = startBlock + 1; index < endBlock; index++)
      result += this.sumBlocks[index];
    for (let index = L; (index < (startBlock + 1) * this.sqrt) && (index <= R); index++)
      result += this.sourceArray[index];
    for (let index = endBlock * this.sqrt; (index <= R) && (index > L); index++)
      result += this.sourceArray[index];
    return result;
  }

  private getBlockNum(index: number) {
    return parseInt('' + index / this.sqrt);
  }

  public update(index:number,value:number){
    let oldValue = this.sourceArray[index];
    this.sourceArray[index]= value;
    let  block = index / this.sqrt;
		this.sumBlocks[block] = this.sumBlocks[block] - oldValue + value;
  }
}
