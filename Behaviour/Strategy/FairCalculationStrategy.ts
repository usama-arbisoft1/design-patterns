interface FairCalculationStrategy {
  baseFair: number;
  calculateFair(distance: number): void;
}
export { FairCalculationStrategy };
