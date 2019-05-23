import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "description"
})
export class DescriptionPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 200) {
      value = value.slice(0, 197);
      value = value.concat("...");
    }
    return value;
  }
}
