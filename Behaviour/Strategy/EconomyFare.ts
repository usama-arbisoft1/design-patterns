import { FairCalculationStrategy } from "./FairCalculationStrategy";
class EconomyFare implements FairCalculationStrategy {
  public baseFair: number = 10;
  calculateFair(distance: number) {
    const fair = this.baseFair * distance;
    console.log(
      `this is a ride with Economy fare of  ${fair} for distance ${distance} KM`
    );
  }
}
export { EconomyFare };
