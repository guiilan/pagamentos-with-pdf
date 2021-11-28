import html2pdf from 'html2pdf.js';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Despesa } from 'src/app/class/despesa';
import { PdfPageComponent } from 'src/app/components/pdf-page/pdf-page.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  @ViewChild('pagamentoslistadPDF', {static: true, read: ViewContainerRef}) pagamentoslistadPDF: ViewContainerRef;
  public despesas : Despesa[]
  public despesaItem : Despesa
  
  constructor(
    private readonly resolver: ComponentFactoryResolver
  ) {
    this.despesas = []
    this.despesaItem = new Despesa()
  }

  ngOnInit(): void {

  }

  public adicionar(despesa: Despesa): Despesa | undefined{
    if(despesa.modelo && despesa.valor && despesa.descricao && despesa.tipo){
      this.despesas.push(this.despesaItem)
      return this.despesaItem = new Despesa()
    } return ;
  }

  deletar(i): Array<Despesa>{
    return this.despesas.splice(i, 1)
  }

  gerarpdf(): void {
    const title = `Despesas Semanais`;
    this.createPDF(title, this.despesas);
  }

  public createPDF(title: string, despesas ): void {
    this.pagamentoslistadPDF.clear();
    const factory = this.resolver.resolveComponentFactory(PdfPageComponent);
    const componentRef = this.pagamentoslistadPDF.createComponent(factory);
    componentRef.instance.title = title;
    componentRef.instance.despesaList = despesas;
    componentRef.instance.emitter.subscribe(() => {
      const config = {
        html2canvas: {
          scale: 1,
          scrollX: 0,
          scrollY: 0,
        },
      };
      this.print(componentRef.location.nativeElement, config);
      componentRef.destroy();
    });
  }
  public print(content: any, config: any): void {
    html2pdf()
      .set(config)
      .from(content)
      .toPdf()
      .save()
  }

}
