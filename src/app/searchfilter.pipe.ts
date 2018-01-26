import { Injectable, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchfilter"
})
@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, term: any): any {
    return value.filter(item => {
      if (term) {
        let regexp = new RegExp("\\b" + term, "gi");
        return regexp.test(item.Data.Platform.Platform);
      } else {
        return true;
      }
    });
  }
}
