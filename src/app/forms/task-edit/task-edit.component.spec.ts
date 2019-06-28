import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule, By } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DebugElement } from '@angular/core';

import { MaterialModule } from 'src/app/tests/material.module';

import { TaskEditComponent } from './task-edit.component';

describe('TaskEditComponent', () => {
  let component: TaskEditComponent;
  let fixture: ComponentFixture<TaskEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEditComponent ],
      imports: [
        BrowserModule,

        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,

        FormsModule,
        ReactiveFormsModule,

        MaterialModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('01 - should create', () => {
    expect(component).toBeTruthy();
  });
});