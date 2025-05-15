import { TestBed } from '@angular/core/testing';
import { HabitService } from './habits.service';

describe('HabitService', () => {
  let service: HabitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HabitService,
        // Aquí van otros mocks si el servicio depende de algo
      ]
    });

    service = TestBed.inject(HabitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
