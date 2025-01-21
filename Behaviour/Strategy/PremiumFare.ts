import { FairCalculationStrategy } from "./FairCalculationStrategy";

class PremiumFare implements FairCalculationStrategy {
  public baseFair: number = 25;
  calculateFair(distance: number) {
    const fair = this.baseFair * distance;
    console.log(
      `this is a ride with Premium fare of  ${fair} for distance ${distance} KM`
    );
  }
}
export { PremiumFare };
