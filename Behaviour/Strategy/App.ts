import { EconomyFare } from "./EconomyFare";
import { FairCalculationStrategy } from "./FairCalculationStrategy";
import { LuxuryFare } from "./LuxuryFare";
import { PremiumFare } from "./PremiumFare";

class App {
  private strategy: FairCalculationStrategy;
  public setStrategy(strategy: FairCalculationStrategy) {
    this.strategy = strategy;
  }
  public calculatefair(distance: number) {
    this.strategy.calculateFair(distance);
  }
}
const app = new App();
const distance = 10;
app.setStrategy(new EconomyFare());
app.calculatefair(distance);
app.setStrategy(new PremiumFare());
app.calculatefair(distance);
app.setStrategy(new LuxuryFare());
app.calculatefair(distance);
