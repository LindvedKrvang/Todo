import { TestBed } from '@angular/core/testing';

import { MockNoteService } from './mock-note.service';

describe('MockNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockNoteService = TestBed.get(MockNoteService);
    expect(service).toBeTruthy();
  });
});
