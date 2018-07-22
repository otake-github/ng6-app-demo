import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubC01Component } from './sub-c01.component';

describe('SubC01Component', () => {
    let component: SubC01Component;
    let fixture: ComponentFixture<SubC01Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SubC01Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SubC01Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
