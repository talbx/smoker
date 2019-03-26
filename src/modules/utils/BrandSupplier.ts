import {CigaretteBrand} from "../model/CigaretteBrand";
import {asList} from "./Functions";

export class BrandSupplier {
    private static lm = new CigaretteBrand("L&M", 11, 11);
    private static gauloises = new CigaretteBrand("Gauloises", 11, 11);
    private static marlboro = new CigaretteBrand("Marlboro", 11, 11);
    private static luckystrike = new CigaretteBrand("Lucky Strike", 11, 11);
    private static pallmall = new CigaretteBrand("Pall Mall", 11, 11);
    private static bensonhedges = new CigaretteBrand("Benson & Hedges", 11, 11);
    private static camel = new CigaretteBrand("Camel", 11, 11);

    public static supply(): Array<CigaretteBrand> {
        return asList<CigaretteBrand>(this.lm, this.gauloises, this.marlboro, this.luckystrike, this.pallmall, this.bensonhedges, this.camel);
    }
}