import { Component, EventEmitter, OnInit, AfterViewInit, ɵangular_packages_core_core_bj } from '@angular/core';
import { Despesa } from 'src/app/class/despesa';

@Component({
  selector: 'app-pdf-page',
  templateUrl: './pdf-page.component.html',
  styleUrls: ['./pdf-page.component.scss']
})
export class PdfPageComponent implements OnInit, AfterViewInit {


  despesaList: Despesa[];
  title: string;
  total: number;
  totalM: number = 0;
  totalG: number = 0;
  totalMG: number = 0;
  data: Date;
  emitter: EventEmitter<void> = new EventEmitter();

  constructor() { 
    this.data = new Date
  }

  ngOnInit(): void {
    this.total = this.despesaList.reduce(getTotal, 0);
    function getTotal(total, item) {
      return total + (item.valor);
    }
    this.despesaList.map(obj => {
      if(obj.tipo == "M"){
        this.totalM = this.totalM + obj.valor
      }if(obj.tipo == "G"){
        this.totalG = this.totalG + obj.valor
      }if(obj.tipo == "M/G"){
        this.totalMG = this.totalMG + obj.valor
      }
    })

  }

  ngAfterViewInit(): void {
    this.emitter.emit();
  }

}
