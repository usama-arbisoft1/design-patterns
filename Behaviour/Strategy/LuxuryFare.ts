import { FairCalculationStrategy } from "./FairCalculationStrategy";

class LuxuryFare implements FairCalculationStrategy {
  public baseFair: number = 50;
  calculateFair(distance: number) {
    const fair = this.baseFair * distance;
    console.log(
      `this is a ride with Luxury fare of  ${fair} for distance ${distance} KM`
    );
  }
}
export { LuxuryFare };
