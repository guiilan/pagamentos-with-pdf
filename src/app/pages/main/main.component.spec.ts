import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Despesa } from 'src/app/class/despesa';
import { MOCK_LIST } from 'src/app/mocks/list-depesa.mock';
import { MainComponent } from './main.component';

describe('PdfPageComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  const mocklist : Array<Despesa> = MOCK_LIST

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) adicionar()', () => {
    expect(component.adicionar(new Despesa())).toBeUndefined()
    expect(component.adicionar(new Despesa("qmg1030","gol","brejo",100,"unit test","M"))).toEqual(new Despesa)
  })

  it('(U) deletar()', () => {
    component.despesas = mocklist
    component.deletar(1)
    expect(component.despesas.length).toEqual(1)
  })

  it('(U) gerarPdf()', () => {
    expect(component.gerarpdf()).toEqual(component.createPDF(`Despesas Semanais`, component.despesas))
  })
});
