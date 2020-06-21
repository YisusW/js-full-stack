import { FormlyFieldConfig } from '@ngx-formly/core';

export const USER_FORM = [
  {
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-6',
        type: 'input',
        key: 'login',
        templateOptions: {
          label: 'Login',
          required: true
        }
      },
      {
        className: 'col-6',
        type: 'input',
        key: 'link',
        templateOptions: {
          label: 'Link',
          required: true,
          placeholder: 'https://github.com/user-name',
          pattern: /^(https):\/\/(github.com\/[a-zA-Z0-9]*)$/
        },
        validation: {
          messages: {
            pattern: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid github link`,
          },
        },
      }
    ]
  },
  {
    template: '<hr />'
  },
  {
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-6',
        type: 'checkbox',
        key: 'site_admin',
        templateOptions: {
          label: 'Site admin',
          required: true
        }
      },
      {
        className: 'col-6',
        type: 'select',
        key: 'type',
        templateOptions: {
          label: 'User type',
          options: [
            { label: 'User', value: 'User' },
            { label: 'Organization', value: 'Organization' }
          ],
          required: true
        }
      },
    ]
  }
];
