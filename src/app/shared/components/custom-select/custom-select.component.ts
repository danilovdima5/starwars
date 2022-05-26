import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  Validator,
  FormControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { Subscription } from 'rxjs';

export interface SelectItem {
  key: string;
  value: string;
}

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSelectComponent
  implements OnInit, OnChanges, OnDestroy, ControlValueAccessor, Validator
{
  constructor(private cdr: ChangeDetectorRef) {}

  @Input() isRequired = false;
  @Input() items: SelectItem[] = [];
  @Input() isMultiple = false;
  @Input() defaultValue: string | null = null;
  @Input() readonly = false;

  private valueChangeSub!: Subscription;

  onChange: any = () => {};
  onTouched: any = () => {};

  showDropdown = false;

  formControl!: FormControl;

  onToggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
    this.onTouched();
  }

  onToggleOption(key: string): void {
    if (!this.isMultiple) {
      this.showDropdown = false;
    }

    if (!this.isMultiple) {
      this.formControl.setValue(key);
    } else if (this.formControl.value.includes(key)) {
      this.formControl.setValue(
        this.formControl.value.filter((v: string) => v !== key)
      );
    } else {
      this.formControl.setValue(this.formControl.value.concat([key]));
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isRequired']?.currentValue === true) {
      this.formControl?.setValidators(Validators.required);
    } else {
      this.formControl?.clearValidators();
    }

    this.formControl?.updateValueAndValidity();
  }

  ngOnInit(): void {
    this.formControl = new FormControl({
      value: this.defaultValue,
      disabled: false,
    });

    this.valueChangeSub = this.formControl.valueChanges.subscribe((data) => {
      this.onChange(data);
    });

    this.cdr.detectChanges();
  }

  validate(): ValidationErrors | null {
    return this.formControl.valid ? null : { error: 'error' };
  }

  writeValue(obj: any): void {
    if (obj) {
      this.formControl.setValue(obj);
    } else {
      this.formControl.setValue(obj);
    }

    this.cdr.detectChanges();
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }

    this.cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.onChange(this.formControl.value);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnDestroy() {
    this.valueChangeSub.unsubscribe();
  }

  indexesToString(indexes: string[] | string | null): string | null {
    if (!indexes) {
      return null;
    }

    return this.isMultiple
      ? (indexes as string[])
          .map(
            (index) =>
              (this.items?.find((item) => item.key === index) as SelectItem)
                .value
          )
          .join(' ')
      : (this.items?.find((item) => item.key === indexes) as SelectItem).value;
  }
}
