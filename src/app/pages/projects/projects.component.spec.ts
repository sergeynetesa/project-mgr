import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/* begin */
import { BrowserModule, By } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DebugElement } from '@angular/core';

import { NgMaterialModule } from '../../shared/ng-material.module';

/* end */

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      imports: [
        BrowserModule,

        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,

        FormsModule,
        ReactiveFormsModule,

        NgMaterialModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('01 - should be created', () => {
    expect(component).toBeTruthy();
  });
});
